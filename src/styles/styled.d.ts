import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      input: string;
      titleText: string;
      text: string;
      border: string;

    }
  }
}
