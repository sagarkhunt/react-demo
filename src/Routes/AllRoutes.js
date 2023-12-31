import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import NavBar from "../comman/NavBar";
import Logout from "../Pages/Logout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
