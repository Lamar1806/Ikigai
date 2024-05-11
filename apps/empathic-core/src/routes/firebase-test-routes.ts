import { Express } from 'express';
import { FireBase } from '../config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

export const firebaseTestRoutes = (app: Express) => {
  app.get('/test', async (req, res) => {
    res.send({ ok: 'here', config: FireBase.config });
  });

  app.get('/test-firebase', async (req, res) => {
    try {
      const testDocRef = doc(FireBase.db, 'test', 'testDoc');
      const testDoc = await getDoc(testDocRef);

      if (testDoc.exists()) {
        console.log('Document data:', testDoc.data());
        res.send(
          'Firebase connection is successful. Document data: ' +
            JSON.stringify(testDoc.data())
        );
      } else {
        console.log('No such document!');
        res.send('Firebase connection is successful, but no such document!');
      }
    } catch (error) {
      console.error('Error connecting to Firestore:', error);
      res.status(500).send('Error testing Firebase connection');
    }
  });
};
