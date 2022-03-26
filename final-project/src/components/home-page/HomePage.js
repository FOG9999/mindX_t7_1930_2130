import React, { Component } from "react";
import OneCartProduct from "../cart/OneCartProduct";
import { productService } from "../../apis/ProductService";
import { notification } from "antd";
class HomePage extends Component {
   state = {};
   render() {
      function changeData(data) {
         
      }

      return (
         <div>
            <div class="alert alert-primary alert-dismissible fade show" role="alert">
               <h4 class="alert-heading">
                  Sale 50%! <span class="badge badge-primary">All New Products</span>{" "}
               </h4>
               <p>
                  Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of
                  content
               </p>
               <hr />
               <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <nav class="navbar navbar-expand-xl navbar navbar-dark bg-dark text-white w-100 p-3">
               <a class="navbar-brand" href="#">
                  fdfdf
               </a>
               <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Điện thoại
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Máy tính
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Phụ kiện điện tử
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Máy tính
                        </a>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  </form>
               </div>
               <div class="text-end">
                  <button type="button" class="btn btn-outline-light me-2">
                     Đăng nhập
                  </button>
                  <button type="button" class="btn btn-warning">
                     Đăng kí
                  </button>
               </div>
            </nav>
         </div>
      );
   }

   componentDidMount() {
      productService.searchProducts("", "", 0, async (res) => {
         if (res.error) {
            notification.error({ message: res.errorMessage });
         } else {
            let data = await res;
            console.log(data);
         }
      });
   }
}

export default HomePage;
