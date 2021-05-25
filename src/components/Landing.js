import React, { Component } from "react";
import restaurants from "../sample-restaurants";

export default class Landing extends Component {

  state = {
    display: false,
    title: '',
    url: ''
  }

  displayList = () => {
    const {display} = this.state
    this.setState({display: !display})
  }

  getTitle = (restaurants) => {
    const {title, url} = restaurants;

    this.setState({title, url, display: false})
  }

  goToRestaurant = () => {
    const {url} = this.state
    this.props.history.push(`/restaurant/${url}`)
  }

  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
            {this.state.title ? this.state.title : 'Choose Restaurant'}
          </div>

          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        {this.state.display ? <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restaurants) => {
              return <li onClick={() => this.getTitle(restaurants)} key={restaurants.id}>{restaurants.title}</li>
            })}
          </ul>
        </div> : null}

        {this.state.title && !this.state.display ? <button onClick={this.goToRestaurant}>Go to restaurant</button> : null}
      </div>
    );
  }
}
