import React, { Component } from "react";
import product_card from "./product_data";
import ip10 from "./ip10.png";
import ip11 from "./ip11.png";
import ip12 from "./ip12.png";
import ip13 from "./ip13.png";
import { productService } from "../../apis/ProductService";
import { notification } from "antd";
import { Pagination } from "antd";

class Listings extends Component {
   state = {
      displayBtns: [],
      productBackend: [],
      currentPage: 1,
      pageSize: 20,
   };

   componentDidMount() {
      productService.searchProducts("", "", 0, async (res) => {
         if (res.error) {
            notification.error({ message: res.errorMessage });
         } else {
            let data = await res;
            const displayButton = [];
            data.forEach((value) => {
               displayButton.push("none");
            });
            this.setState({ productBackend: data, displayBtns: displayButton });
         }
      });
   }

   onPageChange = (page, pageSize) => {
      this.setState({
         currentPage: page,
      });
      productService.searchProducts("", "", page - 1, async (res) => {
         if (res.error) {
            notification.error({ message: res.errorMessage });
         } else {
            let data = await res;
            const displayButton = [];
            data.forEach((value) => {
               displayButton.push("none");
            });
            this.setState({ productBackend: data, displayBtns: displayButton });
         }
      });
   };

   onMouseOver = (index) => {
      const displayBtns = this.state.displayBtns;
      displayBtns[index] = "block";
      this.setState({ displayBtns: displayBtns });
   };

   onMouseOut = (index) => {
      const displayBtns = this.state.displayBtns;
      displayBtns[index] = "none";
      this.setState({ displayBtns: displayBtns });
   };

   logOutConsole = () => console.log(product_card);

   renderBlock = () => {
      return this.state.productBackend.map((item, index) => (
         <div key={index} className="col-sm-6 col-md-3 cardWrapper" onMouseOver={() => this.onMouseOver(index)} onMouseOut={() => this.onMouseOut(index)}>
            <div className="card card-container mt-5">
               <img src={item.images[2]} alt="" className="card-img-top img-fluid" />
               <div className="card-body">
                  <h5 className="card=title">{item.product}</h5>
                  <h5 className="badge rounded-pill bg-danger text-white">{item.price}</h5>
                  <div className="card-body d-flex flex-column info-div">
                     <h6 className="text-wrap fw-lighter">
                        <i className="fas fa-microchip"></i> {item.chipset}
                     </h6>
                     <h6 className="text-wrap fw-lighter">
                        <i className="fas fa-mobile-android-alt"></i> {item.screen}
                     </h6>
                     <h6 className="text-wrap fw-lighter">
                        <i className="fas fa-memory"></i> {item.ram}
                     </h6>
                     <h6 className="text-wrap fw-lighter">
                        <i className="fas fa-sd-card"></i> {item.storage}
                     </h6>
                     <a href={"/"}>
                        {" "}
                        <img src={item.paymentmethod1} className="payment-method" />
                     </a>
                  </div>
                  <div className="btn-wrapper d-flex flex-col">
                     <a href="" className="purchaseButton btn btn-danger fw-bolder text-nowrap" style={{ display: this.state.displayBtns[index] }}>
                        Mua ngay
                     </a>
                     <a href="" className="compareButton btn btn-secondary fw-bolder text-nowrap" style={{ display: this.state.displayBtns[index] }}>
                        So sánh
                     </a>
                  </div>
               </div>
            </div>
         </div>
      ));
   };

   render() {
      return (
         <div className="container">
            <div className="row g-4">{this.renderBlock()}</div>
            <div className="d-flex justify-content-center p-2">
               <Pagination defaultCurrent={1} total={50} pageSize={20} current={this.state.currentPage} onChange={this.onPageChange} />
            </div>
         </div>
      );
   }
}

export default Listings;
