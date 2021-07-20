import { shade } from 'polished';
import styled from "styled-components";

export const Container = styled.div`
  > header {
    height: 144px;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto 0;

  width: 100%;

  form {

    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

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
  }

  @media(max-width: 700px) {
    form {
      padding: 0 16px;
      width: 100%;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
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
