import React from 'react';
import { v4 } from 'uuid';



export default function NewShirt(props) {
  function handleNewShirtform(event) {
    event.preventDefault();
    props.onNewShirtCreation(
      {
        tshirt: event.target.tshirt.value,
        desc: event.target.desc.value,
        price: event.target.price.value,
        size: event.target.size.value,
        quantity: event.target.quantity.value,
        id: v4()
      });
  }
  return (
    <form onSubmit={handleNewShirtform}>
      <input type="text" name="tshirt" placeholder="Product name" />
      <textarea type="text" name="desc" placeholder="Product Description" />
      <input type="number" name="price" placeholder="Product Price" />
      <select name="size" id="tSize">
        <option value="l">L</option>
        <option value="m">M</option>
        <option value="s">S</option>
        <option value="xs">XS</option>
      </select>
      <input type="number" name="quantity" placeholder="Product Quantity" />
      <button type="submit">Add shirt</button>
    </form>
  )
}
NewTicketForm.propTypes = {
  onNewShirtCreation: PropTypes.func
};

// product name 
// Price 
// quantity
// size