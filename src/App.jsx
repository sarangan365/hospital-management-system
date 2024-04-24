import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import AboutUs from "./Pages/AboutUs";
import Appointment from "./Pages/Appointment";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
