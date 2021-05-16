import React from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
} from "react-router-dom";
import FormSection from "./components/form/FormSection";

export function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Hero />
        <FormSection/>
      </Router>
    </div>
  );
}
