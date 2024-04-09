import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-config.js';
import { Express } from 'express';

export const setUpFireBaseRoutes = (app: Express) => {
  app.get('/test-firebase', async (req, res) => {
    res.send({ ok: 'here' });
  });
};
// app.get('/test-firebase', async (req, res) => {
//   res.send({ ok: 'here' });
// try {
//   const db = getFirestore();
//   const testDocRef = doc(db, 'test', 'testDoc');
//   const testDoc = await getDoc(testDocRef);

//   if (testDoc.exists()) {
//     console.log("Document data:", testDoc.data());
//     res.send("Firebase connection is successful. Document data: " + JSON.stringify(testDoc.data()));
//   } else {
//     console.log("No such document!");
//     res.send("Firebase connection is successful, but no such document!");
//   }
// } catch (error) {
//   console.error("Error connecting to Firestore:", error);
//   res.status(500).send("Error testing Firebase connection");
// }
// });
