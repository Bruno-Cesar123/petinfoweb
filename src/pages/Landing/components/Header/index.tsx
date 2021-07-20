import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <p>INFOPETS</p>

        <ul>
          <li>
            <a href="#grid-one">HOME</a>
          </li>
          <li>
            <a href="#grid-two">SERVICES</a>
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default Header;
