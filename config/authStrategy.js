const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel.js");

// local strategy
passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({username});
            if (!user) {
                return done (null, false, {message: "Incorrect username."});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, {message: "Incorrect password."});
            }
            return done (null, user);
        } catch (err) {
            return done (err);
        }
    })
);

passport.use()
    new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const existingUser = await User.findOne({googleId: profile.id});
            
            if (existingUser) {
                return done(null, existingUser);

            } const newUser = new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
        });

        await newUser.save();
        return done(null, newUser);
    } catch (error) {
        return done (error);
    }}
);


    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser(async (id, done) => {
        try {
          const user = await User.findById(id);
          done(null, user);
        } catch (err) {
          done(err);
        }
      }
    );
      
      module.exports = passport;