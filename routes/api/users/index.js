// Requiring our models and passport as we've configured it
const router = require("express").Router();
const db = require("../../../models");
const passport = require("../../../config/passport");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the home page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json({
    message: "Welcome back you Chooglin Foo",
    user: {
      email: req.user.email,
    },
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Mongoose User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(function (userDb) {
      res.json({
        message: "You are now a Choogler, Foo",
        user: {
          email: userDb.email,
        },
      });
    })
    .catch(function (err) {
      console.log(err);
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.send("Logged out");
});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
       res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

module.exports = router;
