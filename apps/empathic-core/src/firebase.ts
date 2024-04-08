import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Initialize Firebase app
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const firestore = getFirestore(app);

// Reference to a specific document in the 'users' collection
const userDocRef = doc(firestore, 'users', 'user1');

// Get the document
getDoc(userDocRef)
  .then((doc) => {
    if (doc.exists()) {
      console.log('Document data:', doc.data());
    } else {
      console.log('No such document!');
    }
  })
  .catch((error) => {
    console.log('Error getting document:', error);
  });
