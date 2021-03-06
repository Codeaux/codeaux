'use strict';

// Module dependencies.
var passport = require('passport');
var users = require('../../controllers/users.server.controller');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

/*
 * Google OAuth Strategy.
 */
module.exports = function(config) {
  passport.use(new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackUrl,
      passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
      // Set the provider data and include tokens.
      var providerData = profile._json;
      providerData.accessToken = accessToken;
      providerData.refreshToken = refreshToken;

      // Create the user OAuth profile.
      var providerUserProfile = {
        name: profile.displayName,
        email: profile.emails[0].value,
        username: profile.username,
        imageUrl: (providerData.picture) ? providerData.picture : undefined,
        provider: 'google',
        providerIdentifierField: 'id',
        providerData: providerData
      };

      // Save the user OAuth profile.
      users.saveOAuthUserProfile(req, providerUserProfile, done);
    }
  ));
};
