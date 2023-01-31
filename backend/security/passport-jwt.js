import passportJWT from 'passport-jwt';
import User from '../models/user.js'

const JWTStrategy = passportJWT.Strategy;

const configureJwtStrategy = (passport) => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        // where is our token located
        jwtFromRequest: (req) => req.cookies.access_token,

        secretOrKey: process.env.JWT_SECRET,
      },
      (jwtPayload, done) => {
        // here is called serialize and deserialize

        return User.findById(jwtPayload.userid)

          .select("_id")
          .then((user) => {
            // attach the user object (_id of the user) to the req object
            return done(null, user);
          })
          .catch((err) => done(err));
      }
    )
  );
};

export default configureJwtStrategy;