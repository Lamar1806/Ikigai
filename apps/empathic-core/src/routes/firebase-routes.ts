import { Express } from 'express';

import { userRoutes } from './user-routes';
import { firebaseTestRoutes } from './firebase-test-routes';

export const setUpFireBaseRoutes = (app: Express) => {
  firebaseTestRoutes(app);
  userRoutes(app);
};
