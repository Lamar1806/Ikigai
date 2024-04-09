import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Express } from 'express';
import { FirebaseApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase-config.js';

export const setUpFireBaseRoutes = (app: Express) => {
  app.get('/test', async (req, res) => {
    res.send({ ok: 'here', firebaseConfig });
  });

  // app.get('/test-firebase', async (req, res) => {
  //   try {
  //     // Now explicitly using the passed firebaseApp for getting Firestore
  //     const db = getFirestore(firebaseApp);
  //     const testDocRef = doc(db, 'test', 'testDoc');
  //     const testDoc = await getDoc(testDocRef);

  //     if (testDoc.exists()) {
  //       console.log('Document data:', testDoc.data());
  //       res.send(
  //         'Firebase connection is successful. Document data: ' +
  //           JSON.stringify(testDoc.data())
  //       );
  //     } else {
  //       console.log('No such document!');
  //       res.send('Firebase connection is successful, but no such document!');
  //     }
  //   } catch (error) {
  //     console.error('Error connecting to Firestore:', error);
  //     res.status(500).send('Error testing Firebase connection');
  //   }
  // });
};
