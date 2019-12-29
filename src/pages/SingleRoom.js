import React, { Component } from "react";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { RoomContext } from "../context";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRooms } = this.context;
    const room = getRooms(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} rooms`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
