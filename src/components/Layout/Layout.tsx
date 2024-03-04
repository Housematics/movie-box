import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
