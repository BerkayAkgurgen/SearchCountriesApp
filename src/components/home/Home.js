import React, { Suspense } from "react";
const Hero = React.lazy(() => import("./hero/Hero"));
const FormSection = React.lazy(() => import("./form/FormSection"));
const CountryCards = React.lazy(() => import("./card/CountryCards"));

function Home() {
  return (
    <div className="Home">
      <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
        <FormSection />
      </Suspense>
      <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
        <CountryCards />
      </Suspense>
    </div>
  );
}

export default Home;
