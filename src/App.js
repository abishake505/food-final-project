import { useEffect } from "react";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/home/Home";
import Navbar from "./Components/Common/Navbar";
import Detailpage from "./Page/detail/Detailpage";
import { CartProvider } from "./Page/Context/CardContext";
import Cardpage from "./Page/Context/Cardpage";
import Loginpage from "./Page/contact/Loginpage";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import "./App.css";
import Aboutpage from "./Page/detail/Aboutpage";


function App() {
  const [search, setSearch] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth !== "true") {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <CartProvider>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Loginpage login={login} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home logout={logout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Cardpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Detailpage />
            </ProtectedRoute>
          }
        />
        <Route
        path="/About"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Aboutpage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </CartProvider>
  );
}
export default App;
