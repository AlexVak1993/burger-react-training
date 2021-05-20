import React, { Component } from "react";
import restaurants from "../sample-restaurants";

export default class Landing extends Component {
  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div className="restaurant_select_top-header">Choose Restaurant</div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restaurants) => {
              return <li key={restaurants.id}>{restaurants.title}</li>
            })}
          </ul>
        </div>

        <button>Go to restaurant</button>
      </div>
    );
  }
}
