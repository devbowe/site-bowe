import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./styled"

const ButtonSimple = props => {
  const {
    text,
    textColor,
    bgColor,
    hoverColor,
    square,
    className,
    buttonClick,
  } = props

  return (
    <StyledButton
      className={`px-3 py-2 ${className}`}
      textColor={textColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
      square={square}
      onClick={buttonClick}
      type="submit"
    >
      {text}
    </StyledButton>
  )
}

ButtonSimple.defaultProps = {
  bgColor: "transparent",
  hoverColor: "darkBlue",
}

ButtonSimple.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
}

export default ButtonSimple
