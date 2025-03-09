import React from "react";
import { NavHeader } from "../components/NavHeader"; // Verifique o caminho

const Home = () => {
  return (
    <div>
      <NavHeader /> {/* O menu deve aparecer aqui */}
      <h1>Bem-vindo à Home</h1>
    </div>
  );
};

export default Home;
