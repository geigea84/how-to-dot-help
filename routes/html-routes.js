// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('Homepage')
})


module.exports = function(app) {

    app.get("/", function(req, res) {
      // If the user already has an account send them to the volunteers page
      if (req.user) {
        res.redirect("/volunteers");
      }
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
  
    app.get("/login", function(req, res) {
      // If the user already has an account send them to the volunteers page
      if (req.user) {
        res.redirect("/volunteers");
      }
      res.sendFile(path.join(__dirname, "../public/login.html"));
    });
  
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/volunteers", isAuthenticated, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/volunteers.html"));
    });
  
  };
  