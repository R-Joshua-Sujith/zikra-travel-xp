import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Page1 from "./components/Page1";
function App() {
  const userStatus = useSelector((state) => state.user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/survey"
            element={userStatus ? <Page1 /> : <Register />}
          />
          <Route
            path="/register"
            element={!userStatus ? <Register /> : <HomePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
