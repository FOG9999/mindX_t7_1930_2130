import React from 'react';

export default class OneCartProduct extends React.Component {

  renderListColors = () => {
    return (
      <div className="d-flex">
        {
          this.props.item.product.colors.map((color, index) => {
            return (<span key={index}
            className={this.props.item.selectedColorIndex === index?"selected-circle mx-1":"circle mx-1"}
            style={{ color: color, backgroundColor: color }}
            ></span>)
          })
        }
      </div>
    )
    
  }

  render() {
    return (
      <div className="d-flex my-3" style={{ minWidth: '700px' }}>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={this.props.item.product.images[0]}
            className="product-image inline"
            alt=""
          />
        </div>
        <div className="part-two d-flex flex-grow-1">
          <div className="name-detail flex-grow-1">
            <h6>{this.props.item.product.title}</h6>
            {
              this.renderListColors()
            }
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
