import React from "react";
import "./App.css";

// components
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Money from "./components/Money";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileCard />
      <Money />
      <Product />
    </div>
  );
}

export default App;
