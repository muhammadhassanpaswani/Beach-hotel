import React from "react";
import { Hero } from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Default = () => {
  return (
    <div>
      <Hero>
        <Banner title="404" subtitle="Page not found">
          <Link to="/" className="btn-primary">
            Go to Home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};
export default Default;
