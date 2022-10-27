import styled from 'styled-components';
import {defaultTheme} from '../../styles/theme'

export const StyledTextContainer = styled.div`
  max-width: 800px;
`

export const StyledContainer = styled.form`
  input:-moz-placeholder, input[type="tel"]::-moz-placeholder, input[type="tel"]:-ms-input-placeholder {
    color: #000000;
    font-weight: 900;
    font-size: 15px;
    font-family: "Circular Std Book", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif, --apple-system,
      BlinkMacSystemFont;
  }

  input {
    outline: none;
    background: none;
    border: none;
    border-bottom: 2px solid #777;
    border-radius: 2px;
    height: 50px;
    font-size: 15px;
    font-weight: 900;
  }

  input:focus {
    border-color: ${({textInputFocus})  => defaultTheme.colors[textInputFocus]};
  }

  @media (max-width: 992px) {
    flex-direction: column;

    input {
      width: 100%;
    }

    .input-control {
      margin-right: 0 !important;
    }
  }
`
