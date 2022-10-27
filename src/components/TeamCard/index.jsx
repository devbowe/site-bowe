import React from "react"
import PropTypes from "prop-types"
import {
  StyledContainer,
  StyledBlock,
  StyledBlockText,
  StyledIcon,
  StyledIconContainer,
  StyledContainerBlocks,
  StyledImg,
  StyledImgContainer,
} from "./styled"
import { Container, Col } from "react-bootstrap"
import Spacing from "../Spacing"

const TeamCard = props => {
  const { color, list, classCol } = props

  return (
    <StyledContainer backgroundColor={color}>
      <Spacing p="100px 0 100px 0">
        <Container fluid className="py-1">
          <StyledContainerBlocks className="w-100 d-flex flex-wrap justify-content-md-center justify-content-lg-between justify-content-xl-between">
            {list != null &&
              list.map(item => (
                <Col className={classCol} key={Math.random()}>
                  <StyledBlock
                    backgroundColor={item.color}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="d-flex">
                      <StyledIconContainer className="d-flex">
                        <StyledIcon src={item.icon} alt={item.alt} />
                      </StyledIconContainer>
                    </div>
                    <StyledBlockText textColor="light">
                      {item.text}
                    </StyledBlockText>
                    <StyledImgContainer className="d-flex">
                      <StyledImg
                        src={item.img}
                        alt={item.alt}
                        className={item.id}
                      />
                    </StyledImgContainer>
                  </StyledBlock>
                </Col>
              ))}
          </StyledContainerBlocks>
        </Container>
      </Spacing>
    </StyledContainer>
  )
}

TeamCard.defaultProps = {
  color: "darkBlue",
}

TeamCard.propTypes = {
  color: PropTypes.string,
  list: PropTypes.array.isRequired,
}

export default TeamCard
