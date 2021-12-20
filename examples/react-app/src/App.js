import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import LandingPage from "./components/LandingPage";
import Summary from "./components/Summary";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<Summary />} path="/summary" />
    </Routes>
  );
}

export default App;
