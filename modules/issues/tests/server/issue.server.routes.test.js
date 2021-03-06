'use strict';

// Module dependencies.
var mongoose = require('mongoose');
var path = require('path');
var request = require('supertest');

var express = require(path.resolve('./config/lib/express'));
var Issue = mongoose.model('Issue');
var User = mongoose.model('User');

// Globals.
var app;
var agent;
var credentials;
var user;
var issue;

/**
 * Issue routes tests.
 */
describe('Issue CRUD tests', function() {
  before(function(done) {
    app = express.init(mongoose);
    agent = request.agent(app);

    done();
  });

  beforeEach(function(done) {
    // Create user credentials
    credentials = {
      username: 'username',
      password: 'password'
    };

    // Create a new user
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: credentials.username,
      password: credentials.password,
      provider: 'local'
    });

    // Save a user to the test db and create new Issue
    user.save(function() {
      issue = {
        name: 'Issue Name'
      };

      done();
    });
  });

  it('should be able to save Issue instance if logged in', function(done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr) {
        // Handle signin error
        if (signinErr) {
          done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Issue
        agent.post('/api/issues')
          .send(issue)
          .expect(200)
          .end(function(issueSaveErr) {
            // Handle Issue save error
            if (issueSaveErr) {
              done(issueSaveErr);
            }

            // Get a list of Issues
            agent.get('/api/issues')
              .end(function(issuesGetErr, issuesGetRes) {
                // Handle Issue save error
                if (issuesGetErr) {
                  done(issuesGetErr);
                }

                // Get Issues list
                var issues = issuesGetRes.body;

                // Set assertions
                (issues[0].user._id).should.equal(userId);
                (issues[0].name).should.match('Issue Name');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to save Issue instance if not logged in', function(done) {
    agent.post('/api/issues')
      .send(issue)
      .expect(401)
      .end(function(issueSaveErr) {
        // Call the assertion callback
        done(issueSaveErr);
      });
  });

  it('should not be able to save Issue instance if no name is provided', function(done) {
    // Invalidate name field
    issue.name = '';

    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr) {
        // Handle signin error
        if (signinErr) {
          done(signinErr);
        }

        // Save a new Issue
        agent.post('/api/issues')
          .send(issue)
          .expect(400)
          .end(function(issueSaveErr, issueSaveRes) {
            // Set message assertion
            (issueSaveRes.body.message).should.match('Please fill Issue name');

            // Handle Issue save error
            done(issueSaveErr);
          });
      });
  });

  it('should be able to update Issue instance if signed in', function(done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr) {
        // Handle signin error
        if (signinErr) {
          done(signinErr);
        }

        // Save a new Issue
        agent.post('/api/issues')
          .send(issue)
          .expect(200)
          .end(function(issueSaveErr, issueSaveRes) {
            // Handle Issue save error
            if (issueSaveErr) {
              done(issueSaveErr);
            }

            // Update Issue name
            issue.name = 'WHY YOU GOTTA BE SO MEAN?';

            // Update existing Issue
            agent.put('/api/issues/' + issueSaveRes.body._id)
              .send(issue)
              .expect(200)
              .end(function(issueUpdateErr, issueUpdateRes) {
                // Handle Issue update error
                if (issueUpdateErr) {
                  done(issueUpdateErr);
                }

                // Set assertions
                (issueUpdateRes.body._id).should.equal(issueSaveRes.body._id);
                (issueUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should be able to get a list of Issues if not signed in', function(done) {
    // Create new Issue model instance
    var issueObj = new Issue(issue);

    // Save the Issue
    issueObj.save(function() {
      // Request Issues
      request(app).get('/api/issues')
        .end(function(req, res) {
          // Set assertion
          res.body.should.be.an.Array.with.lengthOf(1);

          // Call the assertion callback
          done();
        });

    });
  });

  it('should be able to get a single Issue if not signed in', function(done) {
    // Create new Issue model instance
    var issueObj = new Issue(issue);

    // Save the Issue
    issueObj.save(function() {
      request(app).get('/api/issues/' + issueObj._id)
        .end(function(req, res) {
          // Set assertion
          res.body.should.be.an.Object.with.property('name', issue.name);

          // Call the assertion callback
          done();
        });
    });
  });

  it('should be able to delete Issue instance if signed in', function(done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function(signinErr) {
        // Handle signin error
        if (signinErr) {
          done(signinErr);
        }

        // Save a new Issue
        agent.post('/api/issues')
          .send(issue)
          .expect(200)
          .end(function(issueSaveErr, issueSaveRes) {
            // Handle Issue save error
            if (issueSaveErr) {
              done(issueSaveErr);
            }

            // Delete existing Issue
            agent.delete('/api/issues/' + issueSaveRes.body._id)
              .send(issue)
              .expect(200)
              .end(function(issueDeleteErr, issueDeleteRes) {
                // Handle Issue error error
                if (issueDeleteErr) {
                  done(issueDeleteErr);
                }

                // Set assertions
                (issueDeleteRes.body._id).should.equal(issueSaveRes.body._id);

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to delete Issue instance if not signed in', function(done) {
    // Set Issue user
    issue.user = user;

    // Create new Issue model instance
    var issueObj = new Issue(issue);

    // Save the Issue
    issueObj.save(function() {
      // Try deleting Issue
      request(app).delete('/api/issues/' + issueObj._id)
      .expect(401)
      .end(function(issueDeleteErr, issueDeleteRes) {
        // Set message assertion
        (issueDeleteRes.body.message).should.match('User is not logged in');

        // Handle Issue error error
        done(issueDeleteErr);
      });

    });
  });

  afterEach(function(done) {
    User.remove().exec();
    Issue.remove().exec();
    done();
  });
});
