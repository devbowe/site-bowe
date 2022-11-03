import React from "react"
import { Col, Row } from "react-bootstrap"
import ButtonSimple from "../ButtonSimple"
import PropTypes from "prop-types"
import "./infoPercentage.css"
import {
  StyledTextPrimary,
  StyledContentText,
  StyledPercentage,
} from "./styled"

const InfoPercentage = ({
  data,
  textPrimary,
  textSub,
  colorTextSub,
  textButton,
  colorTextPrimary,
  colorTextContentPercentage,
  colorTextButton,
  colorBackgroundButton,
  hoverColorButton,
  squareButton,
  colorTextContentText,
  textCenter,
  infoButton,
}) => {
  return (
    <Row className="pb-5 m-0">
      <Col className="col-12 p-0">
        <section className="mb-3">
          {textPrimary && (
            <StyledTextPrimary
              textColor={colorTextPrimary}
              className={textCenter ? "text-center" : ""}
            >
              {textPrimary}
            </StyledTextPrimary>
          )}
          {textSub && (
            <StyledContentText
              textColor={colorTextSub}
              className={textCenter ? "text-center mt-3" : "mt-3"}
            >
              {textSub}
            </StyledContentText>
          )}
          <div className="my-4">
            {data.map((content, index) => {
              return (
                <Row
                  className="mt-3 justify-content-between align-items-center"
                  key={index}
                >
                  <Col className="col-1 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <StyledPercentage
                      className="ml-2"
                      textColor={colorTextContentPercentage}
                    >
                      {content.percentage}
                    </StyledPercentage>
                  </Col>
                  <Col className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-10">
                    <StyledContentText textColor={colorTextContentText}>
                      {content.text}
                    </StyledContentText>
                  </Col>
                </Row>
              )
            })}
          </div>
        </section>
        {textButton && (
          <section className="pt-5">
            <ButtonSimple
              text={textButton}
              bgColor={colorBackgroundButton}
              hoverColor={hoverColorButton}
              textColor={colorTextButton}
              square={squareButton}
              buttonClick={infoButton}
            />
          </section>
        )}
      </Col>
    </Row>
  )
}

InfoPercentage.defaultProps = {
  data: [],
  textPrimary: "",
  textButton: "",
  textSub: "",
  colorTextSub: "",
  colorTextPrimary: "light",
  colorTextContentPercentage: "light",
  colorTextButton: "secondary",
  colorBackgroundButton: "darkBlue",
  hoverColorButton: "darkBlue",
  squareButton: false,
  colorTextContentText: "",
  textCenter: false,
}

InfoPercentage.propTypes = {
  data: PropTypes.any,
  textPrimary: PropTypes.string,
  textSub: PropTypes.string,
  colorTextSub: PropTypes.string,
  textButton: PropTypes.string,
  colorTextPrimary: PropTypes.string,
  colorTextContentPercentage: PropTypes.string,
  colorTextButton: PropTypes.string,
  colorBackgroundButton: PropTypes.string,
  hoverColorButton: PropTypes.string,
  squareButton: PropTypes.bool,
  colorTextContentText: PropTypes.string,
  textCenter: PropTypes.bool,
  infoButton: PropTypes.func.isRequired,
}

export default InfoPercentage
