import styled from 'styled-components';

export const Container = styled.div`
  background-color: #904AAA;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    p {
      font-size: 1.6rem;
    }

    ul {
      display: flex;
      list-style: none;
      align-items: center;
      gap: 1.6rem;

      li {
        a {
          text-decoration: none;
          font-size: 1.6rem;
          color: #f8f8f8;
        }
      }
    }
  }
`;
