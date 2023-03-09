import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: ReactNode; // 子要素を受け取るためのprops
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;