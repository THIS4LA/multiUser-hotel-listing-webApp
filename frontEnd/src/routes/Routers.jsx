import Home from "../pages/Home";
import Owners from "../pages/Owners/Owners";
import OwnerDetails from "../pages/Owners/OwnerDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/owner-account/Dashboard";
import AdminDashboard from "../Dashboard/admin-account/AdminDashboard";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/owners" element={<Owners />} />
      <Route path="/owners/:id" element={<OwnerDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['guest']}><MyAccount /></ProtectedRoute>} />
      <Route path="/owners/profile/me" element={<ProtectedRoute allowedRoles={['owner']}><Dashboard /></ProtectedRoute>} />
      <Route path="/admins/profile/me" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
    </Routes>
  )
}

export default Routers