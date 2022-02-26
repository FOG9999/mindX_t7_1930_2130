import "./App.css";
import { Routes } from "react-router";
import OneProduct from "./components/share/one-product";
import { Route } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import Login from "./components/login/Login";
import HomePage from "./components/home-page/HomePage";
<<<<<<< HEAD
import SignUpSnavy from "./components/btvn/SignUpSnavy";
import Listings from "./draft/snavy/Listings";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee)

=======
import Singup from "./components/btvn/thangnd/Signup-thangnd";
import Cart from "./components/cart/Cart";
>>>>>>> feature/thangnd

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home-page" element={<HomePage />} />
<<<<<<< HEAD
      <Route path="/listings" element={<Listings />}/>
      <Route path="/sign-up" element={<SignUpSnavy />}/>
=======
      <Route path="sign-up" element={<Singup />} />
      <Route path="my-cart" element={<Cart />} />
>>>>>>> feature/thangnd
    </Routes>
  );
}

export default App;
