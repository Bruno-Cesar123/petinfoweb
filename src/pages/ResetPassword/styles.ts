import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  margin: 0 1.6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1,
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2 {
      font-size: 4rem;
      margin-bottom: 24px;
      color: ${props => props.theme.colors.text};
    }

    input {
      font-size: 1.6rem;
      width: 100%;
      padding: 1.6rem;
      border-radius: 2rem;
      margin-top: 1.8rem;
      border: 1px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.input};
    }

    .input-error {
      border: solid 1px var(--color-red);
    }

    p {
      color: var(--color-red);
      font-size: 1.6rem;
      margin-top: 1rem;
    }

    button {
      font-size: 2rem;
      width: 100%;
      height: 56px;
      font-weight: 500;
      padding: 0 1.6rem;
      border: 0;
      border-radius: 2rem;
      margin-top: 1.6rem;
      background: var(--color-primary);
      color: var(--color-gray);
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#41D3BD')};
      }
    }

    svg {
      margin-right: 16px;
    }
  }


`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;
