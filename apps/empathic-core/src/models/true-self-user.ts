import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  Firestore,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  Auth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FB } from '../config/firebase-config';
import { TrueSelfUserInterface } from './true-self-user-interface';

export class TrueSelfUser {
  db: Firestore;
  auth: Auth;

  constructor(db: Firestore, auth: Auth) {
    this.db = db;
    this.auth = auth;
  }

  // Create a new user
  // user created glaK6LQwKnOU0KmRXKH6tQd7B2q2
  async createUser(email, password, userData) {
    try {
      // Create user with email and password for authentication
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      // User is now created and signed in, you can get the user info like this:
      const user = userCredential.user;

      // Optional: Store additional user information in Firestore
      await setDoc(doc(this.db, 'users', user.uid), userData);

      console.log('User created and data stored in Firestore:', user.uid);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  // Read (get) a user's data
  async getUser(userId: string) {
    try {
      const docRef = doc(this.db, 'trueSelfUsers', userId);
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

  // Update a user's data
  async updateUser(
    userId: string,
    updatedUserData: Partial<TrueSelfUserInterface>
  ) {
    try {
      const userRef = doc(this.db, 'trueSelfUsers', userId);
      await updateDoc(userRef, updatedUserData);
      console.log('User successfully updated.');
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  }

  // Delete a user
  async deleteUser(userId: string) {
    try {
      await deleteDoc(doc(this.db, 'trueSelfUsers', userId));
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
