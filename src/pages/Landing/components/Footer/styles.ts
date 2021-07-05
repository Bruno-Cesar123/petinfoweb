import styled from 'styled-components';

export const Container = styled.div`
  background: #2f0147;
  margin-top: 10rem;
  height: 200px;

  footer {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 3rem 0;
      font-size: 3rem;
      color: #f8f8f8;
      font-weight: 700;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      p {
        font-size: 1.6rem;
        color: #f8f8f8;
      }
    }
  }
`;
