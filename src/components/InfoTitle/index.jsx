import React, { memo } from 'react';
import { Row } from 'react-bootstrap'
import ButtonSimple from '../ButtonSimple'
import PropTypes from 'prop-types';
import WriteMachine from '../WriteMachine';
import './infoTitle.css';
import Spacing from '../Spacing'
import { StyledTitle, StyledTextPrimary, StyledTextSpotlight, StyledContent, StyledImg, StyledSpan, StyledCol } from './styled';
import { Link } from 'gatsby';

const InfoTitle = ({
  title,
  textPrimary,
  textSpotlight,
  textContent,
  textButton,
  urlImagePrimary,
  colorTextTitle,
  colorTextSpotlight,
  colorTextPrimary,
  colorTextContent,
  colorTextButton,
  colorBackgroundButton,
  hoverColorButton,
  squareButton,
  cursor,
  textCenter,
  reverse,
  writeMachine,
  buttonClick,
  minHeight,
  linkTo,
  MobileLeftText
}) => {

  return (
    <Spacing p="0">
      <Row className="m-0">
        <StyledCol minHeight={minHeight} className={`col-12 p-0 ${textCenter && !MobileLeftText ? "text-center" : ""} ${MobileLeftText ? "mobileAlign" : ""}`}>

          {title && <section className="mb-2" > <StyledTitle textColor={colorTextTitle}> {title} </StyledTitle></section>}

          {textContent && typeof textContent === 'string' && reverse && <section className="mb-4"> <StyledContent textColor={colorTextContent}> {textContent} </StyledContent> </section>}

          <section className="mb-4">
            <StyledSpan minHeight={minHeight}>
              <div>
                {textPrimary && <StyledTextPrimary textColor={colorTextPrimary} className={textCenter ? "text-center" : ""}> {textPrimary} </StyledTextPrimary>}
                {textSpotlight && <StyledTextSpotlight className={textPrimary && cursor ? "textCursor" : ''} textColor={colorTextSpotlight}>{textSpotlight}</StyledTextSpotlight>}
                {writeMachine && <WriteMachine writeType={writeMachine} />}
              </div>
            </StyledSpan>
          </section>
          <section>{urlImagePrimary && <StyledImg src={urlImagePrimary} />}</section>

          {textContent && typeof textContent === 'string' && !reverse && <section className="mb-4"> <StyledContent textColor={colorTextContent}> {textContent} </StyledContent> </section>}

          {
            typeof textContent === 'object' &&
            textContent.length > 0 &&
            <section className="my-4"> {

              textContent.map((content, index) => {
                if (index > 0 && index !== textContent.length) {
                  return <div className="mt-3" key={index} ><StyledContent textColor={colorTextContent}> {content} </StyledContent></div>
                }
                return <div key={index}  ><StyledContent textColor={colorTextContent}> {content} </StyledContent></div>

              })

            } </section>
          }
          {textButton &&
            <>
              {linkTo ? (<><Link to={linkTo}>
                <section className={reverse ? 'mt-5' : ''}>
                  <ButtonSimple
                    text={textButton}
                    bgColor={colorBackgroundButton}
                    hoverColor={hoverColorButton}
                    textColor={colorTextButton}
                    square={squareButton}
                    buttonClick={buttonClick} />
                </section>
              </Link>
              </>) : 
              (<>
                <section className={reverse ? 'mt-5' : ''}>
                  <ButtonSimple
                    text={textButton}
                    bgColor={colorBackgroundButton}
                    hoverColor={hoverColorButton}
                    textColor={colorTextButton}
                    square={squareButton}
                    buttonClick={buttonClick} />
                </section>
              </>)}
            </>
          }
        </StyledCol>
      </Row>
    </Spacing>
  )
}

InfoTitle.defaultProps = {
  title: '',
  textPrimary: '',
  textSpotlight: '',
  textContent: ``,
  textButton: '',
  urlImagePrimary: null,
  colorTextTitle: 'light',
  colorTextSpotlight: 'light',
  colorTextPrimary: 'light',
  colorTextContent: 'light',
  colorTextButton: 'secondary',
  colorBackgroundButton: 'darkBlue',
  hoverColorButton: 'ice',
  squareButton: false,
  cursor: false,
  textCenter: false,
  reverse: false,
  writeMachine: '',
  minHeight: false,
  linkTo: '',
}

InfoTitle.propTypes = {
  title: PropTypes.string,
  textPrimary: PropTypes.string,
  textSpotlight: PropTypes.node,
  textContent: PropTypes.any,
  textButton: PropTypes.string,
  urlImagePrimary: PropTypes.any,
  colorTextTitle: PropTypes.string,
  colorTextSpotlight: PropTypes.string,
  colorTextPrimary: PropTypes.string,
  colorTextContent: PropTypes.string,
  colorTextButton: PropTypes.string,
  colorBackgroundButton: PropTypes.string,
  hoverColorButton: PropTypes.string,
  squareButton: PropTypes.bool,
  cursor: PropTypes.bool,
  textCenter: PropTypes.bool,
  reverse: PropTypes.bool,
  writeMachine: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  minHeight: PropTypes.bool,
  linkTo: PropTypes.string,
}

export default memo(InfoTitle);
