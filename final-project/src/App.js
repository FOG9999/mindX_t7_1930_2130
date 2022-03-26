import "./App.css";
import { Routes } from "react-router";
// import OneProduct from './components/share/one-product';
import { Route } from "react-router";
import Login from "./components/login/Login";
import HomePage from "./components/home-page/HomePage";
import Singup from "./components/btvn/thangnd/Signup-thangnd";
import Cart from "./components/cart/Cart";
import "antd/dist/antd.css";
import ProductDetail from "./components/product-detail/ProductDetail";
import Listings from "./draft/snavy/Listings";
import Profile from "./components/profile/Profile";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/home-page" element={<Listings />} />
         <Route path="sign-up" element={<Singup />} />
         <Route path="/my-cart" element={<Cart />} />
         <Route path="/detail" element={<ProductDetail />} />
         <Route path="/profile" element={<Profile />} />
      </Routes>
   );
}

export default App;
