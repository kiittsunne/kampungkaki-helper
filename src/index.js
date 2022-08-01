import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUp";
import LogInForm from "./pages/LogIn";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<LogInForm />} />
            <Route path="signup" element={<SignUpForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
