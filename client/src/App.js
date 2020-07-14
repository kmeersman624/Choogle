import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/index"
// Styles
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
      <Header/>
      
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} /> */}
      
      </div>
    </Router>
  );
}

export default App;

