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
import { CountryProvider } from "./contextAPI/FormContext";
import FavoriteBar from "./components/sidebar/Favorite";
import LocalStorage from "./localstorage/LocalStorage";

// const Navbar = React.lazy(() => import("./components/header/Navbar"));
// const Footer = React.lazy(() => import("./components/footer/Footer"));
// const ErrorPage = React.lazy(() => import("./components/error/ErrorPage"));
// const Home = React.lazy(() => import("./components/Home/Home"));

export function App() {
  return (
    <CountryProvider>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LazyLoad>
                <Home />
              </LazyLoad>
            </Route>
            <Route exact path="/country/:id/">
              <LazyLoad>
                <SpecialCountry />
              </LazyLoad>
            </Route>
            <Route>
              <LazyLoad>
                <ErrorPage />
                <Redirect to="/404" />
              </LazyLoad>
            </Route>
          </Switch>
          <LazyLoad once>
            <FavoriteBar />
          </LazyLoad>
          <LazyLoad once>
            <Footer />
          </LazyLoad>
          <LocalStorage />
        </>
      </Router>
    </CountryProvider>
  );
}
