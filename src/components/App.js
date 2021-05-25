import React, { Component } from 'react'
import Header from './Header'
import MenuAdmin from './MenuAdmin'
import Order from './Order'
import sampleBurgers from '../sample-burgers'
import Burger from './Burger'

export default class App extends Component {

  state = {
    burgers: {},
    order: {}
  }

  addBurger = (burger) => {
    //1. add copy object state
    const burgers = {...this.state.burgers}
    //2. add new burger in var burgers
    burgers[`burger${Date.now()}`] = burger
    //3. use setState to write new obj burgers
    this.setState({burgers})
  }

  loadSampleBurgers = () => {
    this.setState({burgers: sampleBurgers})
  }

  addToOrder = (key) => {
    //make state copy
    const order = {...this.state.order}
    //add key to order with value 1 or refresh current value
    order[key] = order[key] + 1 || 1
    //add new state order to global state
    this.setState({order})
  }

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title='Very hot burger' />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map(key => {
              return <Burger 
                key={key}
                index={key}
                addToOrder={this.addToOrder}
                details={this.state.burgers[key]} />
            })}
          </ul>
        </div>

        <Order 
          burgers={this.state.burgers}
          order={this.state.order}
        />
        <MenuAdmin addBurger={this.addBurger} loadSampleBurgers={this.loadSampleBurgers} />
      </div>
    )
  }
}
