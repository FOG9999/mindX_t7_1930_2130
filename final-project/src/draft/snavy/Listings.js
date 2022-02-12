import React, { Component } from 'react';
import product_card from './product_data'
import ip10 from './ip10.png'
import ip11 from './ip11.png'
import ip12 from './ip12.png'
import ip13 from './ip13.png'

class Listings extends Component {
  state = {}
  
  logOutConsole = () => console.log(product_card)

  // renderBlock = () => {
  //   return Object.entries(product_card).map((item) =>
  //     <div className="container">
  //     <div className="row">
        
  //       <div className="col-3">
  //         <img src={item.image} alt="" className="img-thumbnail img-fluid" />
  //         <div className="card-body">
  //           <h5 className="card=title">IPhone X 64GB 12gb RAM</h5>
  //           <h5 className="badge rounded-pill bg-danger text-white">22.990.000 đ</h5>
  //           <div className="card-body">
  //             <h6 className="text-wrap fw-lighter"><i className="fas fa-microchip"></i> A15 Bionic</h6>
  //             <h6 className="text-wrap fw-lighter"><i className="fas fa-mobile-android-alt"></i> 6.1'</h6>
  //             <h6 className="text-wrap fw-lighter"><i className="fas fa-memory"></i> 4GB</h6>
  //             <h6 className="text-wrap fw-lighter"><i className="fas fa-sd-card"></i> 128 GB</h6>
  //             <div onClick={this.logOutConsole}>Console logs</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   )
  // }

  render() {
  return (
    <div>
      <div className="container">
      <div className="row">
        
        <div className="col-3">
          <img src={ip10} alt="" className="img-thumbnail img-fluid" />
          <div className="card-body">
            <h5 className="card=title">IPhone X 64GB 12gb RAM</h5>
            <h5 className="badge rounded-pill bg-danger text-white">22.990.000 đ</h5>
            <div className="card-body">
              <h6 className="text-wrap fw-lighter"><i className="fas fa-microchip"></i> A15 Bionic</h6>
              <h6 className="text-wrap fw-lighter"><i className="fas fa-mobile-android-alt"></i> 6.1'</h6>
              <h6 className="text-wrap fw-lighter"><i className="fas fa-memory"></i> 4GB</h6>
              <h6 className="text-wrap fw-lighter"><i className="fas fa-sd-card"></i> 128 GB</h6>
              <div onClick={this.logOutConsole}>Console logs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
}

export default Listings;