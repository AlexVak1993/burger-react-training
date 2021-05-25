import React, { Component } from 'react'
import AddBurgerForm from './AddBurgerForm'

export default class MenuAdmin extends Component {
  render() {
    return (
      <div className="menu-admin">
        <h2>Menu control</h2>

        <AddBurgerForm addBurger={this.props.addBurger} />

        <button onClick={this.props.loadSampleBurgers}>Load Burgers</button>
      </div>
    )
  }
}
