import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

class FirebaseInstance {
  public app;
  public db;
  public auth;

  public config = {
    apiKey: process.env.NX_FIREBASE_API_KEY,
    authDomain: process.env.NX_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NX_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NX_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NX_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NX_FIREBASE_APP_ID,
  };

  constructor() {
    try {
      this.app = initializeApp(this.config);
      this.db = getFirestore(this.db);
      this.auth = getAuth(this.app);
    } catch (err) {
      return err;
    }
  }

  public getFireBaseApp = () => this.app;
  public getFireBaseDb = () => this.db;
  public getConfig = () => this.config;
  public getAuth = () => this.auth;
}

export const FireBase = new FirebaseInstance();
export const db = FireBase.db;
export const auth = FireBase.auth;
