import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledLink } from './styled';

const Button = (
  {
    text,
    link,
    textColor,
    bgColor,
    borderColor,
    hoverColor,
    square,
    cursor,
    textHoverColor,
    click,
    underline }) => {

  if (link) {
    return (
      <StyledLink to={`${link}`}>
        <StyledButton
          textColor={textColor}
          textHoverColor={textHoverColor}
          bgColor={bgColor}
          borderColor={borderColor}
          hoverColor={hoverColor}
          square={square}
          cursor={cursor}
          underline={underline}
        >
          {text}
        </StyledButton>
      </StyledLink>
    )
  }

  return (
    <StyledButton
      textColor={textColor}
      textHoverColor={textHoverColor}
      bgColor={bgColor}
      borderColor={borderColor}
      hoverColor={hoverColor}
      square={square}
      cursor={cursor}
      underline={underline}
      onClick={click}>
      {text}
    </StyledButton>

  )
}

Button.defaultProps = {
  text: 'Texto aqui',
  textColor: 'secondary',
  bgColor: 'transparent',
  borderColor: 'DarkBlue',
  hoverColor: 'DarkBlue',
  square: false,
  underline: false,
  cursor: true,
  click: () => null,
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverColor: PropTypes.string,
  square: PropTypes.bool,
  underline: PropTypes.bool,
  cursor: PropTypes.bool,
  click: PropTypes.func,
}

export default Button;
