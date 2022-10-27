import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledBlock, StyledLink } from './styled';
import { Col } from 'react-bootstrap'

const TileBlocks = props => {
  const { title, color, hoverColor, list } = props;

  return (
    <div className="my-3">
      <StyledTitle textColor="black">{title}</StyledTitle>
      <Col className="p-0 mt-3 d-flex flex-wrap flex-row">
        {list != null && list.map((item, index) => (
          <StyledLink
            to={item.link}
            key={index}>
            <StyledBlock
              backgroundColor={color}
              hoverColor={hoverColor}
              className="py-2 mb-3 m-1 px-3 mr-md-5 mr-lg-5 mr-xl-5 rounded"
            >
              {item.name}
            </StyledBlock>
          </StyledLink>

        ))}
      </Col>
    </div>
  );
}

TileBlocks.defaultProps = {
  color: 'blue',
  hoverColor: 'brandBlue',
}

TileBlocks.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  list: PropTypes.node.isRequired,
}

export default TileBlocks;
