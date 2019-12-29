import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, nobis!"
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, nobis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shutttle",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, nobis!"
      },
      {
        icon: <FaBeer />,
        title: "Strong  Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, nobis!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
