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
        <h1>Autoconhecimento</h1>
        <div>
          <div>
            <h2>Seja mais feliz</h2>
            <p>Sem comentarios, apenas assista!</p>

            <Link to="/">
              Proximo <FiArrowRightCircle />
            </Link>

            <Socials />
          </div>

          <div>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/TlmqHVtsZzk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
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
