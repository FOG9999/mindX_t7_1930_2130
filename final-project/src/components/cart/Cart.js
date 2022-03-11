import React, { Component } from 'react';
import CartSummary from './CartSummary';
import OneCartProduct from './OneCartProduct';
import './Cart.css';
import fakeProducts from './data.json';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      products: fakeProducts.message.products,
      carts: fakeProducts.message.carts,
    };
  }

  calculateTotal = () => {
    let price = 0;
    for (let i = 0; i < this.state.products.length; i++) {
      price += this.state.products[i].price * this.state.products[i].stocks;
    }
    this.setState({ total: price });
  };

  onAddAmountItem = (itemId) => {
    // filter items
    let selectedIndex = -1;
    let selected = this.state.products.filter((item, index) => {
      if (item.id === itemId) {
        selectedIndex = index;
        return true;
      } else {
        return false;
      }
    })[0];
    if (selected) {
      selected.stocks += 1;
      const updatedProducts = this.state.products;
      updatedProducts[selectedIndex] = selected;
      this.setState({ products: updatedProducts });
      this.calculateTotal();
    } else {
    }
  };

  onMinusAmountItem = (itemId) => {
    let selectedIndex = -1;
    let selected = this.state.products.filter((item, index) => {
      if (item.id === itemId) {
        selectedIndex = index;
        return true;
      } else {
        return false;
      }
    })[0];
    if (selected) {
      selected.stocks -= 1;
      const updatedProducts = this.state.products;
      updatedProducts[selectedIndex] = selected;
      this.setState({ products: updatedProducts });
      this.calculateTotal();
    } else {
    }
  };

  componentDidMount = () => {
    this.calculateTotal();
  };

  renderListItems = () => {
    return (
      <div>
        {this.state.products.map((item, index) => {
          return (
            <OneCartProduct
              item={item}
              key={index}
              onAddAmountItem={this.onAddAmountItem}
              onMinusAmountItem={this.onMinusAmountItem}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="cart-container">
        <h4>Giỏ hàng của bạn ({this.state.products.length} sản phẩm)</h4>
        {/* <button onClick={() => this.putIntoCart()}>Put Into Cart</button> */}
        <div className="list-item d-flex">
          <div className="items">{this.renderListItems()}</div>
          <CartSummary total={this.state.total} />
        </div>
      </div>
    );
  }
}

export default Cart;
