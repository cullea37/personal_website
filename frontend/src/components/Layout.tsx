import React, { ReactNode } from 'react';
import Navbar from './Navbar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;