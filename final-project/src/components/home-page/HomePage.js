import React, { Component } from "react";
import OneCartProduct from "../cart/OneCartProduct";
import { productService } from "../../apis/ProductService";
import { notification } from "antd";
class HomePage extends Component {
   state = {};
   render() {
      return <div>{/* <OneCartProduct /> */}</div>;
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