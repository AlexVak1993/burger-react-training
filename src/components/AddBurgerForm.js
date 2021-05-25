import React, { Component } from 'react'

class AddBurgerForm extends Component {

  nameRef = React.createRef()
  priceRef = React.createRef()
  statusRef = React.createRef()
  descRef = React.createRef()
  imageRef = React.createRef()

  createBurger = (e) => {
    e.preventDefault()

    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value || 0),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    this.props.addBurger(burger)
    e.currentTarget.reset()
    console.log(e.currentTarget);
  }

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input ref={this.nameRef} name="name" type="text" placeholder="Name" autoComplete="off" />
        <input ref={this.priceRef} name="price" type="number" placeholder="Price" autoComplete="off" />
        <select ref={this.statusRef} className="status" name="status">
          <option value="availabele">Available</option>
          <option value="unavailabele">Remove from menu</option>
        </select>
        <textarea ref={this.descRef} name="desc" placeholder="Desc" />
        <input ref={this.imageRef} name="image" type="text" placeholder="Image" autoComplete="off" />
        <button type="submit">+ Add to menu</button>
      </form>
    )
  }
}

export default AddBurgerForm