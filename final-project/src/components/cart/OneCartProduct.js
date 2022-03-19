import React from 'react';

export default class OneCartProduct extends React.Component {

  render() {
    return (
      <div className="d-flex my-2" style={{ minWidth: '700px' }}>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWLAwg4bEAIhAyJ1lgI1F-Xlwx97SThFEsQ&usqp=CAU"
            className="product-image inline"
            alt=""
          />
        </div>
        <div className="part-two d-flex flex-grow-1">
          <div className="name-detail flex-grow-1">
            <h6>{this.props.item.product.title}</h6>
            <div className="d-flex">
              Màu{' '}
              <span
                className="selected-circle mx-1"
                style={{ color: 'grey', backgroundColor: 'grey' }}
              ></span>{' '}
              <span
                className="circle"
                style={{ color: 'black', backgroundColor: 'black' }}
              ></span>
            </div>
          </div>
          <div className="price" style={{ width: '100px' }}>
            {this.props.item.product.price.toLocaleString('tr-TR')}đ
          </div>
          <div className="quantity" style={{ width: '100px' }}>
            <div className="d-flex">
              <div
                onClick={() =>
                  this.props.onMinusAmountItem(this.props.item.product.id)
                }
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                -
              </div>
              <input
                type="text"
                className="form-control"
                value={this.props.item.amount}
                style={{ width: '50px' }}
              />
              <div
                onClick={() =>
                  this.props.onAddAmountItem(this.props.item.product.id)
                }
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
