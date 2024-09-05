import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Reviews from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
