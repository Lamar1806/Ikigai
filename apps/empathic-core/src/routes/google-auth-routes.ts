// googleAuthRoutes.ts
import { Express, Request, Response } from 'express';
import passport from 'passport';

const setupGoogleRoutes = (app: Express) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
      // Successful authentication, redirect home or to another page
      res.redirect('/success');
    }
  );

  app.get('/success', (req: Request, res: Response) => {
    //@ts-ignore
    if (req.isAuthenticated()) {
      //@ts-ignore
      res.send(`<h1>Success! Welcome ${req.user.displayName}</h1>`);
    } else {
      res.redirect('/');
    }
  });

  // Logout route
  app.get('/logout', (req: Request, res: Response) => {
    //@ts-ignore
    req.logout((err) => {
      if (err) {
        //@ts-ignore
        return next(err);
      }
      // Optionally, you can redirect to home page or login page after logging out
      res.redirect('/login');
    });
  });
};

export default setupGoogleRoutes;
