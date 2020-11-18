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
        <h1>Andre Lima</h1>
        <div>
          <div>
            <h2>Autoconhecimento</h2>
            <p>
              O auto-conhecimento tem um valor especial para o próprio
              indivíduo. Uma pessoa que se ‘tornou consciente de si mesma’, por
              meio de perguntas que lhe foram feitas, está em melhor posição de
              prever e controlar seu próprio comportamento.
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
