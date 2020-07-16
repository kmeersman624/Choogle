const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

// mongoose connection
mongoose.connect("mongodb://localhost/notesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( console.log(connected));

// Parse req.body
// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Logger
app.use(morgan("dev"));

// Register route
app.use(require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(PORT, () => console.log("App listening on port:" + PORT));