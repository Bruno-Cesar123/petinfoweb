import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  > header {
    padding: 32px 0;
    background: #2f0147;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1100px;
  margin: 24px auto;

  display: flex;
  gap: 24px;

  /* div {
    img {
      padding: 12px;
      width: 240px;
      height: 240px;
      border-radius: 50%;
    }
  } */

  form {
    padding: 12px;

    h2 {
      font-size: 4rem;
      margin-bottom: 24px;
      color: #2f0147;
    }

    input {
      font-size: 1.6rem;
      width: 100%;
      padding: 1.6rem;
      border-radius: 2rem;
      margin-top: 1.8rem;
      border: 1px solid #2f0147;
    }

    textarea {
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
      width: 100%;
      height: 160px;
      padding: 1.6rem;
      border-radius: 0.8rem;
      margin-top: 1.8rem;
      border: 1px solid #2f0147;
    }

    button {
      margin-top: 1rem;
      height: 50px;
      border-radius: 8px;
      font-size: 1.6rem;

      padding: 0 32px;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .buttons {
      display: flex;
      gap: 16px;
      margin-top: 1.8rem;

      .confirm {
        background: #31d83f;
        color: #f8f8f8;
      }

      .exclude {
        background: #ea4335;
        color: #f8f8f8;
      }
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;


  img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #2f0147;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #f8f8f8;
    }

    &:hover {
      background: ${shade(0.2, '#2f0147')};
    }
  }
`;
