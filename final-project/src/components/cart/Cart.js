import React, { Component } from "react";
import CartSummary from "./CartSummary";
import OneCartProduct from "./OneCartProduct";
import "./Cart.css";

class Cart extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "iPhone 9 63GB",
        price: 20000000,
      },
      {
        id: 1,
        title: "iPhone 9+ 127GB",
        price: 10000000,
      },
      {
        id: 1,
        title: "iPhone 9- 255GB",
        price: 15000000,
      },
    ],
  };

  renderListItems = () => {
    return (
      <div>
        {this.state.items.map((item, index) => {
          return <OneCartProduct item={item} key={index} />;
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="cart-container">
        <h4>Giỏ hàng của bạn ({this.state.items.length} sản phẩm)</h4>
        <div className="list-item d-flex">
          <div className="items">{this.renderListItems()}</div>
          <CartSummary />
        </div>
      </div>
    );
  }
}

export default Cart;
