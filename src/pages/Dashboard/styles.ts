import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #2f0147;
`;

export const HeaderContent = styled.div`
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: #f8f8f8;
    font-weight: 900;
  }

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
      font-size: 1.6rem;
    }

    a {
      text-decoration: none;
      color: #904aaa;
      font-size: 1.6rem;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 64px auto;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 700px;
    border-bottom: 1px solid #2f0147;

    h1 {
      position: relative;
      padding: 1rem 0;
      color: #2f0147;
    }

    button {
      background: #2f0147;
      color: #f8f8f8;
      font-size: 1.6rem;
      padding: 8px;
      width: 12rem;
      text-decoration: none;
      border-radius: 8px;
      border: none;
    }
  }

  .list-pets {
    margin-top: 80px;
    max-width: 700px;

    a {
      background: #fff;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      transition: transform 0.2s;

      &:hover {
        transform: translateX(10px);
      }

      & + a {
        margin-top: 16px;
      }

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

      div {
        margin: 0 16px;
        flex: 1;

        strong {
          font-size: 20px;
          color: #2f0147;
        }

        p {
          font-size: 18px;
          color: #a8a8b3;
          margin-top: 4px;
        }
      }

      svg {
        margin-left: auto;
        color: #cbcbd6;
      }
    }

    .any-data {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: 3rem;
        color: #2f0147;
        font-weight: 900;
      }
    }
  }
`;
