import { doc, getDoc } from 'firebase/firestore';
import { Express } from 'express';
import { FB } from '../config/firebase-config';

export const setUpFireBaseRoutes = (app: Express) => {
  app.get('/test', async (req, res) => {
    res.send({ ok: 'here', config: FB.config });
  });

  app.get('/test-firebase', async (req, res) => {
    try {
      const testDocRef = doc(FB.db, 'test', 'testDoc');
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
