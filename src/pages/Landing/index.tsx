import React from 'react';
import { Link } from 'react-router-dom';
import petcode from '../../assets/images/petcode.svg';
import img1 from '../../assets/images/img1.svg';
import img2 from '../../assets/images/img2.svg';
import img3 from '../../assets/images/img3.svg';

import Header from './components/Header';

import { Container, Content } from './styles';
import Footer from './components/Footer';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <main id="grid-one">
          <section className="info">
            <h1>INFOPETS</h1>
            <p>Cadastre seus pets e obtenha suas informações de forma online</p>

            <div className="button-container">
              <Link to="/signin" target="_blank">
                Começar
              </Link>
            </div>
          </section>
          <section className="img-content">
            <img src={petcode} alt="petcode" />
          </section>
        </main>
        <main id="grid-two">
          <section>
            <img src={img1} alt="imagem 1" />
            <p>Cadastre as informações do seu pet de forma rápida e prática.</p>
          </section>
          <section>
            <img src={img2} alt="imagem 2" />
            <p>
              As informações do seu pet serão salvas para você consultar a hora
              que quiser.
            </p>
          </section>
          <section>
            <img src={img3} alt="imagem 3" />
            <p>Tudo isso e muito mais....</p>
          </section>
        </main>
      </Content>
      <Footer />
    </Container>
  );
};

export default Landing;
