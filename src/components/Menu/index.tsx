import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <header>
        <ul>
          <Link to="/">Autoconhecimento</Link>
          <Link to="/time">G. de tempo</Link>
          <Link to="/focus">Foco e produtividade</Link>
        </ul>
      </header>
    </Container>
  );
};

export default Menu;
