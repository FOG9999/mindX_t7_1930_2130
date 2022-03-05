import React, { Component } from "react";

class CartSummary extends Component {
  state = {
    hasDiscount: false,
  };
  render() {
    return (
      <div
        className="cart-summary-container"
        style={{ minWidth: "250px", marginLeft: "30px" }}
      >
        <div className="total">
          <div className="current-total d-flex mb-2">
            <div className="title-curr-total flex-grow-1">Tạm tính</div>
            <div className="curr-total-value">
              <b>20.000.000đ</b>
            </div>
          </div>
          <div className="discount border-bottom d-flex">
            <div className="title-discount flex-grow-1">Giảm giá</div>
            <div className="discount-value">
              <b>200.000đ</b>
            </div>
          </div>
          <div className="total d-flex">
            <div
              className="title-discount flex-grow-1"
              style={{ fontSize: "25px" }}
            >
              Thành tiền
            </div>
            <div className="discount-value">
              <b style={{ fontSize: "25px", color: "red" }}>200.000đ</b>
            </div>
          </div>
        </div>
        <div
          className="button-checkout mt-2 p-2 d-flex justify-content-center"
          style={{ backgroundColor: "red", color: "white" }}
        >
          <span className="m-auto">Tiến hành đặt hàng</span>
        </div>
      </div>
    );
  }
}

export default CartSummary;
