import React from "react";
import { Link } from "react-router-dom";
import focusImg from "../../assets/focus.jpg";

import Menu from "../../components/Menu";
import Socials from "../../components/Socials";

import { FiArrowRightCircle } from "react-icons/fi";

import { Container, Details, Info } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Info>
        <h1>Andre Lima</h1>
        <div>
          <div>
            <h2>Foco e Produtividade</h2>
            <p>
              Quando a circunstância é boa, devemos desfrutá-la; quando não é
              favorável, devemos transformá-la; e quando não pode ser
              transformada, devemos transformar a nós mesmos.
            </p>

            <Link to="/">
              Proximo <FiArrowRightCircle />
            </Link>

            <Socials />
          </div>

          <div>
            <img src={focusImg} alt="imagem sobre foco" />
          </div>
        </div>
      </Info>
      <Details>
        <Menu />
      </Details>
    </Container>
  );
};

export default Home;
