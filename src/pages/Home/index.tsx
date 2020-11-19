import React from "react";
import { Link } from "react-router-dom";
import autoconhecimentoImg from "../../assets/autoconhecimento.jpg";

import Menu from "../../components/Menu";
import Socials from "../../components/Socials";

import { FiArrowRightCircle } from "react-icons/fi";

import { Container, Details, Info } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Info>
        <h1>Autoconhecimento</h1>
        <div>
          <div>
            <h2>Ham?</h2>
            <p>
              O autoconhecimento permite que você descubra suas qualidades,
              capacidades, bem como seus pontos que devem ser melhorados.
              Investir em autoconhecimento é designar esforços para entender a
              si mesmo em todos os âmbitos.
            </p>

            <Link to="/time">
              Proximo <FiArrowRightCircle />
            </Link>

            <Socials />
          </div>

          <div>
            <img
              src={autoconhecimentoImg}
              alt="imagem sobre auto conhecimento"
            />
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
