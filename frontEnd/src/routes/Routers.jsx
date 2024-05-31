import Home from "../pages/Home";
import Owners from "../pages/Owners/Owners";
import OwnerDetails from "../pages/Owners/OwnerDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

import { Routes, Route } from "react-router-dom";

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
    </Routes>
  )
}

export default Routers