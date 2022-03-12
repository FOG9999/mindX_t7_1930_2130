import React, { Component } from "react";
import product_card from "./product_data";
import ip10 from "./ip10.png";
import ip11 from "./ip11.png";
import ip12 from "./ip12.png";
import ip13 from "./ip13.png";
import { productService } from "../../apis/ProductService";
import { notification } from "antd";
import { Pagination } from "antd";
import { Card } from "antd"

class Listings extends Component {
   state = {
      displayBtns: [],
      productBackend: [],
      currentPage: 1,
      pageSize: 20,
      minValue: 0,
      maxValue: 9,
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

   onPageChange = (page) => {
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
   }


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
            <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <h4 class="alert-heading">Sale 50%! <span class="badge badge-primary">All New Products</span> </h4>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content</p>
                    <hr />
                    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                     <nav class="navbar navbar-expand-xl navbar navbar-dark bg-dark text-white w-100 p-3" >
                        <a class="navbar-brand" href="#">fdfdf</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Điện thoại
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                              </li>
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Máy tính
                              </a>
                              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Phụ kiện điện tử
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                              </li>
                              <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Máy tính
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                              </li>
                          </ul>
                          <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                          </form>
                        </div>
                        <div class="text-end">
                          <button type="button" class="btn btn-outline-light me-2">Đăng nhập</button>
                          <button type="button" class="btn btn-warning">Đăng kí</button>
                        </div>
                     </nav>
            <div className="row g-4">{this.renderBlock()}</div>
            <div className="d-flex justify-content-center mt-5">
            <Pagination defaultCurrent={1} total={20} pageSize={5} onChange={this.onPageChange}/>
            </div>
         </div>
      );
   }
}

export default Listings;
