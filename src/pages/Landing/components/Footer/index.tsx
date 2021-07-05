import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <footer>
        <h2>Entre em contato conosco.</h2>
        <div>
          <p>email: teste@teste.com</p>
          <p>whatsapp: 55+ (00) 00000-0000</p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
