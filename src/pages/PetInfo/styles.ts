import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  > header {
    padding: 32px 0;
    background: var(--color-primary);

    display: flex;
    align-items: center;

    div {
      padding: 0 16px;
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: var(--color-gray);
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

  form {
    padding: 12px;
    width: 600px;

    h2 {
      font-size: 4rem;
      margin-bottom: 24px;
      color: ${props => props.theme.colors.text};
    }

    input {
      background: ${props => props.theme.colors.input};
      font-size: 1.6rem;
      width: 100%;
      padding: 1.6rem;
      border-radius: 2rem;
      margin-top: 1.8rem;
      border: 1px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.text};
    }

    textarea {
      background: ${props => props.theme.colors.input};
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
      width: 100%;
      height: 160px;
      padding: 1.6rem;
      border-radius: 0.8rem;
      margin-top: 1.8rem;
      border: 1px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.text};
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

    .input-error {
      border: solid 1px var(--color-red);
    }

    p {
      color: var(--color-red);
      font-size: 1.6rem;
      margin-top: 1rem;
    }

    .buttons {
      display: flex;
      gap: 16px;
      margin-top: 1.8rem;

      .confirm {
        background: var(--color-green);
        color: var(--color-gray);
      }

      .exclude {
        background: var(--color-red);
        color: var(--color-gray);
      }
    }
  }

  @media(max-width: 700px) {
    display: flex;
    flex-direction: column;

    form {
      width: 100%;

      h2 {
      text-align: center;
      font-size: 3.5rem;
    }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    background: var(--color-primary);
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
      color: var(--color-gray);
    }

    &:hover {
      background: ${shade(0.2, '#41D3BD')};
    }
  }
`;
