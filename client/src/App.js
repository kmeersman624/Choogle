import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/index";

// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import PrivateRoute from "./utils/PrivateRoute";
import Notes from "./pages/Notes";

function App() {
  return (
    <Router>
      <Header />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/about" component={About} />
      <PrivateRoute exact path="/notes" component={Notes} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
    </Router>
  );
}

export default App;
