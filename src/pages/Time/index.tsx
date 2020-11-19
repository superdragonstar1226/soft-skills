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
        <h1>Autoconhecimento</h1>
        <div>
          <div>
            <h2>Importância Pessoal</h2>
            <p>
              Ter sucesso não é o mesmo que ter sorte, nós fazemos a nossa
              propria sorte. Mas por onde começar? Ao pensar sobre nós mesmos,
              deixamos de focar no outro e em tecer julgamentos O
              autoconhecimento é necessário também para delimitarmos nossos
              objetivos.
            </p>

            <Link to="/focus">
              Proximo <FiArrowRightCircle />
            </Link>

            <Socials />
          </div>

          <div>
            <img src={timeImg} alt="imagem sobre gestão de tempo" />
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
