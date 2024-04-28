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
    (req, res) => {
      // Successful authentication, redirect home or to another page
      //@ts-ignore
      if (req.user) {
        // Ensure the user object exists and has the data needed
        //@ts-ignore
        const userEmail = encodeURIComponent(req.user.email);
        //@ts-ignore
        const userToken = encodeURIComponent(req.user.token); // Assuming the token is stored in user object

        // Redirect with user information
        res.redirect(
          `http://localhost:4200/?auth=success&email=${userEmail}&token=${userToken}`
        );
      } else {
        // Handle case where user information is not available
        res.redirect('/login');
      }
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

  app.get('/auth/session', (req, res) => {
    //@ts-ignore
    if (req.isAuthenticated()) {
      //@ts-ignore
      res.status(200).json({ isAuthenticated: true, user: req.user });
    } else {
      res.status(200).json({ isAuthenticated: false });
    }
  });

  // Logout route
  app.get('/logout', (req, res) => {
    //@ts-ignore
    req.logout();
    //@ts-ignore
    req.session.destroy(); // Optional: destroys the session
    res.redirect('http://localhost:4200');
  });
};

export default setupGoogleRoutes;
