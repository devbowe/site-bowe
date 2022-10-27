import styled from "styled-components"
import { defaultTheme } from "../../styles/theme"

export const StyledTextContainer = styled.div`
  max-width: 800px;
  span {
    color: ${defaultTheme.typography.third};
  }
`

export const StyledContainer = styled.form`
  input:-moz-placeholder,
  input[type="tel"]::-moz-placeholder,
  input[type="tel"]:-ms-input-placeholder {
    color: #000000;
    font-weight: 900;
    font-size: 15px;
    font-family: "Syne", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif, --apple-system, BlinkMacSystemFont;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 26px;
    color: rgba(34, 33, 55, 0.4);
  }
  input {
    outline: none;
    background: none;
    border: none;
    border-bottom: 2px solid #777;
    border-radius: 2px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    opacity: 90%;
    width: 100%;
  }
  input:focus {
    border-color: ${({ textInputFocus }) =>
      defaultTheme.colors[textInputFocus]};
  }
  @media (max-width: 992px) {
    #first-step,
    #second-step {
      flex-direction: column;
      width: 100%;
    }
    .input-control {
      margin-right: 0 !important;
    }
  }

  @media (max-width: 768px) {
    #first-step {
      flex-direction: column;
    }

    #second-step {
      flex-direction: column;
    }

    input {
      width: 100%;
    }
    .input-control {
      margin-right: 0 !important;
    }
  }
`
