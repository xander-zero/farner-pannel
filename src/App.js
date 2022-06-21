import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// react toastify
import { ToastContainer } from "react-toastify";

// pages
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage to="/login" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
