import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer";


// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <main></main>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
