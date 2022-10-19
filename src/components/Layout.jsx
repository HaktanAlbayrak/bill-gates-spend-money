import React from "react";
import "../styles/layout.scss";

// components
import ProfileCard from "./ProfileCard";
import Money from "./Money";
import Product from "./Product";
import Receipt from "./Receipt";

const Layout = () => {
  return (
    <div className="Layout">
      <ProfileCard />
      <Money />
      <Product />
      <Receipt />
    </div>
  );
};

export default Layout;
