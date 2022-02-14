import React, { useState, useEffect } from 'react';
import { Header } from './';


const Layout = ({ children }) => {

  return (
   <>
    <Header />
    {children}
   </>
  );
};

export default Layout;