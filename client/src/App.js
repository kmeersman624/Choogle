import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";
import Header from "./components/Header"
// import SignInModal from "./components/Modal"
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header/>
        {/* <SignInModal/> */}
        <Home />
        {/* <Slider/> */}
        <Carousel />
      </Route>
      <Route exact path="/about"></Route>
      <Route exact path="/contact"></Route>
    </Router>
  );
}

export default App;