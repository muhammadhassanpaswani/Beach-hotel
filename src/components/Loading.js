import React from "react";
import loader from "../images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Rooms data Loading...</h4>
      <img src={loader} alt="" />
    </div>
  );
}
