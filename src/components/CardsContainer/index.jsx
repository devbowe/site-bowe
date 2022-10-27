import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledTitleH2, StyledTitle, StyledSubTitle, StyledBlock, StyledBlockText, StyledIcon, StyledIconContainer, StyledContainerBlocks } from './styled';
import { Container, Col } from 'react-bootstrap';
import ButtonSimple from '../ButtonSimple';
import Spacing from '../Spacing';

const CardsContainer = props => {
  const { color, list, classCol, classBlock, textColorButton, titleButton, title, subTitle, buttonClick, bgColor } = props;

  return (
    <StyledContainer className="mb-3" backgroundColor={bgColor}>
      <Spacing p="6rem 0">
        <Container>
          <div className="px-0 px-md-5 px-lg-5 px-xl-5 ">
            <StyledTitle textColor="light" className="text-center">
              <StyledTitleH2 className="h2">{title}</StyledTitleH2>
            </StyledTitle>
            <StyledSubTitle textColor={color} className="text-center mt-4">
              {subTitle}
            </StyledSubTitle>
          </div>
          <StyledContainerBlocks className="w-100 py-5 d-flex flex-wrap justify-content-md-center justify-content-lg-between justify-content-xl-between align-items-center">
            {list != null && list.map(item => (
              <Col className={classCol} key={Math.random()}>
                <StyledBlock
                  backgroundColor="light"
                  className={classBlock}
                >
                  <div className="d-flex justify-content-center">
                    <StyledIconContainer className="d-flex justify-content-center mb-3 rounded-circle text-center">
                      <StyledIcon src={item.icon} />
                    </StyledIconContainer>
                  </div>
                  <StyledBlockText textColor="lightGray" className="text-center">{item.name}</StyledBlockText>
                </StyledBlock>
              </Col>
            ))}
          </StyledContainerBlocks>
          <div className="d-flex justify-content-center">
            <ButtonSimple text={titleButton} bgColor="light" hoverColor="ice" textColor={textColorButton} buttonClick={buttonClick} />
          </div>
        </Container>
      </Spacing>
    </StyledContainer>
  );
}

CardsContainer.defaultProps = {
  color: 'blue',
}

CardsContainer.propTypes = {
  color: PropTypes.string,
  list: PropTypes.array.isRequired,
  buttonClick: PropTypes.func.isRequired,
}

export default CardsContainer;
