import React, { Component } from 'react';
import product_card from './product_data'
import ip10 from './ip10.png'
import ip11 from './ip11.png'
import ip12 from './ip12.png'
import ip13 from './ip13.png'


class Listings extends Component {
  state = {
    displayBtns: []
  }

  componentDidMount() {
    const displayButton = [];
    product_card.map(value => {
      displayButton.push('none');
    })
    this.setState({displayBtns: displayButton});
  }
  
  onMouseOver = (index) => {
    const displayBtns = this.state.displayBtns;
    displayBtns[index] = 'block';
    this.setState({displayBtns: displayBtns});
  }

  onMouseOut = (index) => {
    const displayBtns = this.state.displayBtns;
    displayBtns[index] = 'none';
    this.setState({displayBtns: displayBtns});
  }

  logOutConsole = () => console.log(product_card)

  renderBlock = () => {
    return product_card.map((item, index) =>

  <div className="col-sm-6 col-md-3 cardWrapper" onMouseOver={() => this.onMouseOver(index)} onMouseOut={() => this.onMouseOut(index)}>
    <div className="card card-container mt-5">
        <img src={item.image} alt="" className="card-img-top img-fluid"/>
        <div className="card-body">
            <h5 className="card=title">{item.product}</h5>
            <h5 className="badge rounded-pill bg-danger text-white">{item.price}</h5>
            <div className="card-body d-flex flex-column info-div">
                <h6 className="text-wrap fw-lighter"><i className="fas fa-microchip"></i> {item.chipset}</h6>
                <h6 className="text-wrap fw-lighter"><i className="fas fa-mobile-android-alt"></i> {item.screen}</h6>
                <h6 className="text-wrap fw-lighter"><i className="fas fa-memory"></i> {item.ram}</h6>
                <h6 className="text-wrap fw-lighter"><i className="fas fa-sd-card"></i> {item.storage}</h6>
                <a href={"/"}> <img src={item.paymentmethod1} className="payment-method" /></a>
            </div>
            <div className="btn-wrapper d-flex flex-col">
                  <a href="" className="purchaseButton btn btn-danger fw-bolder text-nowrap" style={{display: this.state.displayBtns[index]}}>Mua ngay</a>
                  <a href="" className="compareButton btn btn-secondary fw-bolder text-nowrap" style={{display: this.state.displayBtns[index]}}>So sánh</a>
            </div>
        </div>
    </div>
  </div>
  )
}

  render() {
  return (
    <div className="container">
      <div className="row g-4">
        {this.renderBlock()}
        </div>
      </div>
  )
}
}



 

export default Listings;