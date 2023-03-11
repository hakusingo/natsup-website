import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import { useState } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
        {children}
      <Footer />
    </>
  );
};

export default Layout;