import React, { Component } from 'react';
import CartSummary from './CartSummary';
import OneCartProduct from './OneCartProduct';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          count: 1,
          title: 'iPhone 9 63GB',
          price: 20000000,
        },
        {
          count: 1,
          title: 'iPhone 9+ 127GB',
          price: 10000000,
        },
        {
          count: 1,
          title: 'iPhone 9- 255GB',
          price: 15000000,
        },
      ],
      total: 3,
    };
  }

  calculateTotal = () => {
    let price = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      price += this.state.items.price * this.state.items.count;
    }
  };

  putIntoCart = () => {
    this.setState({ total: this.state.total + 1 });
  };

  renderListItems = () => {
    return (
      <div>
        {this.state.items.map((item, index) => {
          return (
            <OneCartProduct
              item={item}
              key={index}
              putIntoCart={this.putIntoCart}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="cart-container">
        <h4>Giỏ hàng của bạn ({this.state.total} sản phẩm)</h4>
        {/* <button onClick={() => this.putIntoCart()}>Put Into Cart</button> */}
        <div className="list-item d-flex">
          <div className="items">{this.renderListItems()}</div>
          <CartSummary />
        </div>
      </div>
    );
  }
}

export default Cart;
