import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AccountDashboard from './AccountDashboard';
import BarraNavegacion from '../../componentes/BarraNavegacion/BarraNavegacion';
import ForgotPasswordForm from './ForgotPasswordForm';
import PiePagina from '../../componentes/PiePagina/PiePagina';
import Breadcrumb from '../../componentes/Breadcrumb/Breadcrumb';

const MiCuenta = () => {
  return (
    <>
      <BarraNavegacion />
      <Breadcrumb path="Mi Cuenta" />
      <h1>Mi Cuenta</h1>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<AccountDashboard />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      </Routes>
      <PiePagina />
    </>
  );
};

export default MiCuenta;
