import React from "react";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Featured from "../components/Featured";
const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at $300"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Featured />
    </div>
  );
};
export default Home;
