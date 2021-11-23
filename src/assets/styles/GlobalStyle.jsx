import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import customReset from './customReset.scss';
import fonts from './fonts.scss';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${customReset};
  ${fonts};

  ${({ theme }) => {
    return css`
      body,
      input {
        color: ${theme.colors.white};
        font-family: ${theme.fonts.family.base};
        font-size: ${theme.fonts.size.base};
        font-weight: ${theme.fonts.weight.normal};
      }
    `;
  }};
`;

export default GlobalStyle;
