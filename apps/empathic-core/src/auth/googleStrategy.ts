import { PassportStatic } from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const googleStrategyConfig = (passport: PassportStatic): void => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.NX_GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.NX_GOOGLE_CLIENT_SECRET as string,
        callbackURL: 'http://localhost:3333/auth/google/callback',
      },
      (accessToken, refreshToken, profile, cb) => {
        // Here, you might want to save the profile information to your database or check if the user exists in your DB
        return cb(null, profile);
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj: any, done) => {
    done(null, obj);
  });
};

export default googleStrategyConfig;
