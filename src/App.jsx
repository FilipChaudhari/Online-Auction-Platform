import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";

import Login from "./auth/Login";
import Register from "./auth/Register";

import AdminLogin from "./admin/AdminLogin";
import AdminRegister from "./admin/AdminRegister";
import AdminPanel from "./admin/AdminPanel";

import UserPanel from "./user/UserPanel";

function App() {

  return (
    <>
      <MainNavbar />

      <Routes>

        {/* PUBLIC */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* USER / BIDDER */}

        <Route
          path="/user/*"
          element={<UserPanel />}
        />

        {/* ADMIN */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/register"
          element={<AdminRegister />}
        />

        <Route
          path="/admin/*"
          element={<AdminPanel />}
        />

      </Routes>

    </>
  );
}

export default App;