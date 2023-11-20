/** @jsxImportSource theme-ui */
import { ReactNode } from 'react';
import Navbar from '@components/Navbar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      sx={{
        paddingTop: '60px',
      }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
