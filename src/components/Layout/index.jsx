import React from 'react';
import { Col, Row } from 'react-bootstrap'
import './layout.css'

const Layout = (props) => {
  return (
    <Row className="p-0 m-0 layout">
      <Col className={props.removePaddingTop ? "col-12 pb-5 pt-0 px-0 mx-0" : "col-12 px-0 mx-0"}>
        {props.children}
      </Col>
    </Row>
  )
}

export default Layout;
