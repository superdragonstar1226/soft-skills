import React from "react";

import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

import { Container } from "./styles";

const Socials: React.FC = () => {
  return (
    <Container>
      <a target="_blank" href="https://www.facebook.com/andrelima0505/">
        <FiFacebook size={25} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/andre-lima-6a309ab6/"
      >
        <FiLinkedin size={25} />
      </a>
      <a target="_blank" href="http://github.com/andredelima92">
        <FiGithub size={25} />
      </a>
    </Container>
  );
};

export default Socials;
