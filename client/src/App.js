import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;