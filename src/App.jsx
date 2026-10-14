import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}