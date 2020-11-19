import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <header>
        <ul>
          <Link to="/">Oque é</Link>
          <Link to="/time">Importância</Link>
          <Link to="/focus">Burnout</Link>
          <Link to="/explode">Seja feliz</Link>
        </ul>
      </header>
    </Container>
  );
};

export default Menu;
