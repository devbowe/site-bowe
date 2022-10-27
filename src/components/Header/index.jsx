import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap'
import MenuNav from '../MenuNav'
import InfoTitle from '../InfoTitle'
import { StyledImg } from './styled';
import Video from '../Video';
import './header.css';

const Header = ({ sensitiveImg, ...props }) => {
  return (
    <Container fluid className={`mt-lg-1 mt-sm-5 py-5 px-3 px-sm-4 px-md-4 px-lg-4 px-xl-5 position-relative bg-img-${props.theme} bg-img-small-${props.theme}`}>
      <MenuNav classMenuNav={`bd-nav-${props.theme}`} />
      <Container fluid className="px-sm-4 px-md-4 px-lg-4 px-xl-5">
        <Row className="pt-5 h-100 justify-content-center justify-content-lg-between justify-content-xl-between align-items-center flex-wrap">
          <Col className="col-12 col-lg-5 col-xl-6 h-100 d-flex align-items-center ">
            <InfoTitle {...props} />
          </Col>

          <Col className={`${props.theme !== 'dark' ? 'urlImg' : ''} col-12 col-md-8 col-lg-6 col-xl-6 d-flex align-items-center justify-content-end ${props.classUrlImg}`}>
            <>
              {props.theme === 'dark'
                ? (<div><Video /></div>)
                : <StyledImg sensitiveImg={sensitiveImg} src={props.urlImg} />
              }
            </>
          </Col>
        </Row>
      </Container>
    </Container>

  )
}

Header.defaultProps = {
  sensitiveImg: false,
}
Header.propTypes = {
  sensitiveImg: PropTypes.bool,
}

export default memo(Header);
