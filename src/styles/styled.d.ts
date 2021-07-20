import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      input: string;
      h1: string;
      h2: string;
      text: string;
      border: string;

    }
  }
}
