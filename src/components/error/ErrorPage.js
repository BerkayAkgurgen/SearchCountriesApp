import React from "react";

const ErrorPage = () => {
  return (
    <div className="error-page d-center">
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <a className="button" href="#">
        <i className="icon-home"></i> Go back in initial page, is better.
      </a>
    </div>
  );
};

export default ErrorPage;
