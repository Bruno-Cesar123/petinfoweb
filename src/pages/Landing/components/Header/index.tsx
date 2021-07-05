import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <p>PETINFO</p>

        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">SERVICES</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default Header;
