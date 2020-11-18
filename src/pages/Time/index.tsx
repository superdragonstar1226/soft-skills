import React from "react";
import { Link } from "react-router-dom";
import timeImg from "../../assets/time.jpg";

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
            <h2>Gestão de Tempo</h2>
            <p>
              Sempre que te perguntarem se você pode fazer um trabalho,
              diga-lhes: – Certamente eu posso! – Em seguida, fique muito
              ocupado e descubra como fazê-lo.
            </p>

            <Link to="/focus">
              Proximo <FiArrowRightCircle />
            </Link>

            <Socials />
          </div>

          <div>
            <img src={timeImg} alt="auto conhecimento" />
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
