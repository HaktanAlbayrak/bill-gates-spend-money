import React from "react";
import "../styles/layout.scss";

// components
import ProfileCard from "./ProfileCard";
import Money from "./Money";
import Product from "./Product";

const Layout = () => {
  return (
    <div className="Layout">
      <ProfileCard />
      <Money />
      <Product />
    </div>
  );
};

export default Layout;
