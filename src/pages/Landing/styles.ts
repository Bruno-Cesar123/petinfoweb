import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  #grid-one {
    margin-top: 8rem;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;

    .info {
      h1 {
        font-size: 6rem;
        color: ${props => props.theme.colors.text};
        font-weight: 900;
      }

      p {
        margin: 1.6rem 0;
        font-size: 2rem;
        color: var(--color-primary);
        font-weight: bold;
      }

      .button-container {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 12rem;
          height: 6rem;
          font-size: 2rem;
          border-radius: 24px;
          background: var(--color-primary);
          color: var(--color-gray);

          text-decoration: none;
          transition: background 0.4s;

          &:hover {
            background: transparent;
            border: solid 1px var(--color-primary);
            color: var(--color-primary);
          }
        }
      }
    }

    .img-content {
      img {
        height: 350px;
        width: 100%;
      }
    }
  }

  #grid-two {
    display: grid;
    margin-top: 10rem;
    grid-template-columns: repeat(3, 1fr);

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      img {
        height: 200px;
        width: 200px;
      }

      p {
        font-size: 1.6rem;
        color: var(--color-primary);
      }
    }
  }
`;
