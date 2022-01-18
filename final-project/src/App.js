import "./App.css";
import { Routes } from "react-router";
import OneProduct from "./components/share/one-product";
import { Route } from "react-router";
import Login from "./components/login/Login";
import HomePage from "./components/home-page/HomePage";
import SignUpSnavy from "./components/btvn/SignUpSnavy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUpSnavy />}/>
    </Routes>
  );
}

export default App;
