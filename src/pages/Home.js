import React from "react";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
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
    </div>
  );
};
export default Home;
