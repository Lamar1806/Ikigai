import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  Auth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FB } from '../config/firebase-config';
import { TrueSelfUserInterface } from './true-self-user-interface';
import { createCustomer } from './stripe-customer';

export class TrueSelfUser {
  db: Firestore;
  auth: Auth;

  constructor(db: Firestore, auth: Auth) {
    this.db = db;
    this.auth = auth;
  }

  async checkFirestoreForEmail(email: string) {
    const usersRef = collection(this.db, 'users');
    const querySnapshot = await getDocs(
      query(usersRef, where('email', '==', email))
    );
    return !querySnapshot.empty; // returns true if email exists
  }

  // Create a new user
  // user created glaK6LQwKnOU0KmRXKH6tQd7B2q2
  async createUser(email, password, userData: TrueSelfUserInterface) {
    const emailExists = await this.checkFirestoreForEmail(email);
    if (emailExists) {
      throw new Error('Email already exists.');
    }
    // Proceed with creating the user
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    const user = userCredential.user;
    userData.email = email; // Store email in Firestore for future checks
    const customer = await createCustomer(userData.email, userData.name);
    await setDoc(doc(this.db, 'users', user.uid), {
      ...userData,
      stripe_customer_id: customer.id,
    });

    console.log('User created and data stored in Firestore:', user.uid);
  }

  // Read (get) a user's data
  async getUser(userId: string) {
    try {
      const docRef = doc(this.db, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('User data:', docSnap.data());
        return docSnap.data();
      } else {
        console.log('No such user!');
        return null;
      }
    } catch (error) {
      console.error('Error getting user data: ', error);
    }
  }

  // Method to get a user ID by email
  async getUserIdByEmail(email: string): Promise<string | null> {
    const usersRef = collection(this.db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming each email is unique and can only have one document
      const doc = querySnapshot.docs[0];
      console.log('User ID found:', doc.id);
      return doc.id; // returns the user ID
    } else {
      console.log('No user found with that email');
      return null; // no user found
    }
  }

  // Update a user's data
  async updateUser(
    userId: string,
    updatedUserData: Partial<TrueSelfUserInterface>
  ) {
    try {
      const userRef = doc(this.db, 'users', userId);
      await updateDoc(userRef, updatedUserData);
      console.log('User successfully updated.');
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  }

  // Delete a user
  async deleteUser(userId: string) {
    try {
      await deleteDoc(doc(this.db, 'users', userId));
      console.log('User successfully deleted.');
    } catch (error) {
      console.error('Error deleting user: ', error);
    }
  }

  // Login a user
  async loginUser(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('User logged in:', userCredential.user);
      return userCredential;
      // You can return userCredential if needed
    } catch (error) {
      console.error('Error logging in user:', error);
      // Handle errors (e.g., user not found, wrong password)
    }
  }

  // Method to log out a user
  async logoutUser() {
    try {
      await signOut(this.auth);
      console.log('User successfully logged out.');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
