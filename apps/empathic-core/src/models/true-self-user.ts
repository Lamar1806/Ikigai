import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FireBase } from '../config/firebase-config';
import { TrueSelfUserInterface } from './true-self-user-interface';
import { createCustomer } from './stripe-customer';

const db = FireBase.db;
const auth = FireBase.auth;

export const checkFirestoreForEmail = async (email: string) => {
  const usersRef = collection(db, 'users');
  const querySnapshot = await getDocs(
    query(usersRef, where('email', '==', email))
  );
  return !querySnapshot.empty; // returns true if email exists
};

// Create a new user
// user created glaK6LQwKnOU0KmRXKH6tQd7B2q2
export const createUser = async (
  email,
  password,
  userData: TrueSelfUserInterface
) => {
  const emailExists = await checkFirestoreForEmail(email);
  if (emailExists) {
    throw new Error('Email already exists.');
  }
  // Proceed with creating the user
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  userData.email = email; // Store email in Firestore for future checks
  const customer = await createCustomer(userData.email, userData.name);
  await setDoc(doc(db, 'users', user.uid), {
    ...userData,
    stripe_customer_id: customer.id,
  });

  console.log('User created and data stored in Firestore:', user.uid);
};

// Read (get) a user's data
export const getUser = async (userId: string) => {
  try {
    const docRef = doc(db, 'users', userId);
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
};

// Method to get a user ID by email
export const getUserIdByEmail = async (
  email: string
): Promise<string | null> => {
  const usersRef = collection(db, 'users');
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
};

// Update a user's data
export const updateUser = async (
  userId: string,
  updatedUserData: Partial<TrueSelfUserInterface>
) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, updatedUserData);
    console.log('User successfully updated.');
  } catch (error) {
    console.error('Error updating user: ', error);
  }
};

// Delete a user
export const deleteUser = async (userId: string) => {
  try {
    await deleteDoc(doc(db, 'users', userId));
    console.log('User successfully deleted.');
  } catch (error) {
    console.error('Error deleting user: ', error);
  }
};

// Login a user
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
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
};

// Method to log out a user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User successfully logged out.');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
