import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   text-transform: capitalize;
   font-weight: 550;
   font-size: 1.5rem;
   border-radius: 0.75rem;
   border: 0.1rem solid ${({ theme }) => theme.back.accent};
   user-select: none;
   transition: 0.1s ease;
   height: 4.2rem;
   padding: 0 2rem;
   ${({ theme, main }) => setColors(theme, main)};

   svg {
      color: inherit;
   }

   &:hover:not(:disabled) {
      opacity: 0.85;
   }

   &:active:not(:disabled) {
      transform: scale(0.975);
   }

   &:disabled {
      opacity: 0.5;
      cursor: default;
   }
`;

function setColors(theme, main) {
   if (main) {
      return css`
         background-color: ${theme.back.accent};
         color: ${theme.text.main.head};
      `;
   } else {
      return css`
         background-color: transparent;
         color: ${theme.back.accent};

         &:hover {
            background-color: ${theme.back.accent};
            color: ${theme.text.main.head};
         }
      `;
   }
}
