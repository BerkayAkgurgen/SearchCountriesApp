import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  Redirect,
} from "react-router-dom";

const Navbar = React.lazy(() => import("./components/header/Navbar"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const ErrorPage = React.lazy(() => import("./components/error/ErrorPage"));
const Home = React.lazy(() => import("./components/Home/Home"));

export function App() {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
          <Navbar />
        </Suspense>
        <Switch>
          <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
            <Route exact path="/" component={Home} />
          </Suspense>
          <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
            <Route component={ErrorPage} />
          </Suspense>
        </Switch>
        <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}
