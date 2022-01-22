import "./App.css";
import { Routes } from "react-router";
import OneProduct from "./components/share/one-product";
import { Route } from "react-router";
import Login from "./components/login/Login";
import HomePage from "./components/home-page/HomePage";
import Singup from "./components/btvn/thangnd/Signup-thangnd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="sign-up" element={<Singup />} />
    </Routes>
  );
}

export default App;
