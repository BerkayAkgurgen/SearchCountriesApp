import React from "react";
import Navbar from "./components/header/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
} from "react-router-dom";

export function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}
