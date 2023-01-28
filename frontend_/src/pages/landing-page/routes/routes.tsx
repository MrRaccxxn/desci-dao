import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../../landing-page/LandingPage';
import Dashboard from '../../dashboard/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}