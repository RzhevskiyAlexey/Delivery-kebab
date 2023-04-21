import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NavBar from './ui/NavBar';
import ClientAccaunt from './pages/ClientAccaunt';
import CourierAccaunt from './pages/CourierAccaunt';

export default function App({ orders, user }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/orders" element={<CourierAccaunt user={user} orders={orders} />} />
        <Route path="/clients" element={<ClientAccaunt user={user} orders={orders} />} />
      </Routes>
    </div>
  );
}
