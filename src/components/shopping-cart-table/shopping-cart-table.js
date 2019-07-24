import React from 'react';
import './shopping-cart-table.css';




const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete}) => {
  
  items =  items===undefined ? [] : items;

  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{id+1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            onClick={()=>onDelete(id)}
            className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <button 
            onClick={()=>onIncrease(id)}
            className="btn btn-outline-success btn-sm">
            <i className="fa fa-plus-circle"></i>
          </button>
          <button 
            onClick={()=>onDecrease(id)}
            className="btn btn-outline-warning btn-sm ">
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="shopping-cart-table">
    <h2>Your Order</h2>
      <table className="table">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {
            items.map(renderRow())
          }
          
        </tbody>       
      </table>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
}

export default ShoppingCartTable

