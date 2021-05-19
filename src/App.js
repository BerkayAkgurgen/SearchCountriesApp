import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  Redirect,
} from "react-router-dom";
import LazyLoad from "react-lazyload";
import SpecialCountry from "./components/countrypage/SpecialCountry";
import Navbar from "./components/header/Navbar";
import Home from "./components/Home/Home";
import ErrorPage from "./components/error/ErrorPage";
import Footer from "./components/footer/Footer";

// const Navbar = React.lazy(() => import("./components/header/Navbar"));
// const Footer = React.lazy(() => import("./components/footer/Footer"));
// const ErrorPage = React.lazy(() => import("./components/error/ErrorPage"));
// const Home = React.lazy(() => import("./components/Home/Home"));

export function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LazyLoad>
              <Home />
            </LazyLoad>
          </Route>
          <LazyLoad>
            <Route exact path="/country/:id/">
              <SpecialCountry />
            </Route>
          </LazyLoad>
          <LazyLoad>
            <Route>
              <ErrorPage />
            </Route>
          </LazyLoad>
        </Switch>
        <LazyLoad once>
          <Footer />
        </LazyLoad>
      </div>
    </Router>
  );
}
