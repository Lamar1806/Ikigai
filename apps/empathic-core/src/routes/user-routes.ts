import { TrueSelfUser } from '../models/true-self-user'; // Adjust the path as necessary
import { FB } from '../config/firebase-config.js'; // Ensure this points to your config
import { Express } from 'express';

// Initialize TrueSelfUser with Firebase config
const trueSelfUser = new TrueSelfUser(FB.db, FB.auth);

export const userRoutes = (app: Express) => {
  // Create User
  app.post('/user', async (req, res) => {
    const { email, password, userData } = req.body;
    try {
      await trueSelfUser.createUser(email, password, userData);
      res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  // Login User
  app.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      await trueSelfUser.loginUser(email, password);
      res.status(200).send({ message: 'User logged in successfully' });
    } catch (error) {
      res.status(401).send(error.message);
    }
  });

  // Get User Data
  app.get('/user/:userId', async (req, res) => {
    try {
      const userData = await trueSelfUser.getUser(req.params.userId);
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
  app.put('/user/:userId', async (req, res) => {
    try {
      await trueSelfUser.updateUser(req.params.userId, req.body);
      res.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  // Delete User
  app.delete('/user/:userId', async (req, res) => {
    try {
      await trueSelfUser.deleteUser(req.params.userId);
      res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
};
