import React, { useState, useEffect } from 'react';
import { Header } from './';

// higher component
const Layout = ({ children }) => {

  return (
   <>
    <Header />
    {children}
   </>
  );
};

export default Layout;