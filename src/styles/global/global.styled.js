import { css, createGlobalStyle } from 'styled-components';

function globalStyle() {
   return css`
      body {
         background-color: ${({ theme }) => theme.back.sub};
      }

      *::selection {
         background-color: ${({ theme }) => theme.back.accent};
         color: ${({ theme }) => theme.text.main.head};
      }

      *::placeholder {
         color: rgba(0, 0, 0, 0.5);
      }

      *::-webkit-scrollbar {
         width: 0rem;

         @media screen and (max-width: 600px) {
            width: 0;
         }
      }

      *::-webkit-scrollbar-thumb {
         background-color: ${({ theme }) => theme.back.accent};
         border-radius: 1rem;
      }

      *::-webkit-scrollbar-track {
         background-color: ${({ theme }) => theme.back.card1};
      }

      a {
         color: ${({ theme }) => theme.back.accent};

         &:hover {
            opacity: 0.85;
         }
      }
   `;
}

const GlobalStyle = createGlobalStyle`
   ${globalStyle()}
`;

export default GlobalStyle;