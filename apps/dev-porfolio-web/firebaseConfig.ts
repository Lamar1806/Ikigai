// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmsw4I7SvQF6ZGZLx4Nqn9twXXbXaCRaA',
  authDomain: 'my-portfolio-6c44b.firebaseapp.com',
  projectId: 'my-portfolio-6c44b',
  storageBucket: 'my-portfolio-6c44b.appspot.com',
  messagingSenderId: '139378426370',
  appId: '1:139378426370:web:46f1038bac0919ec68dd1b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
