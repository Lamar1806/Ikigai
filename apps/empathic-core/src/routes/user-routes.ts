import { Express } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUserIdByEmail,
  loginUser,
  updateUser,
} from '../models/true-self-user';

export const userRoutes = (app: Express) => {
  // Create User
  app.post('/users/register', async (req, res) => {
    const { email, password, userData } = req.body;
    try {
      // If user does not exist, create the user
      const user = await createUser(email, password, userData);
      res.status(200).send({ user, message: 'User created successfully' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  // Login User
  app.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCredential = await loginUser(email, password);
      const user = getUserIdByEmail(email);
      res
        .status(200)
        .send({ userCredential, message: 'User logged in successfully', user });
    } catch (error) {
      res.status(401).send(error.message);
    }
  });

  // Get User Data
  app.get('/users/:userId', async (req, res) => {
    try {
      const userData = await getUser(req.params.userId);
      if (userData) {
        res.status(200).send(userData);
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  // Update User Data
  app.put('/users/:userId', async (req, res) => {
    try {
      await updateUser(req.params.userId, req.body);
      res.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  // Delete User
  app.delete('/users/:userId', async (req, res) => {
    try {
      await deleteUser(req.params.userId);
      res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
};
