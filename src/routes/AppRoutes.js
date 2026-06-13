import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Categories from "../pages/Categories";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
        <Route path="*" element={<NotFound />} />
        <Route
  path="/login"
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>
<Route
  path="/register"
  element={
    <PublicRoute>
      <Register />
    </PublicRoute>
  }
/>
<Route
  path="/categories"
  element={
    <PrivateRoute>
      <Categories />
    </PrivateRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;