import React from 'react';
import Navigation from '../navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
