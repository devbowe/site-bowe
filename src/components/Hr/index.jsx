import React from 'react';
import PropTypes from 'prop-types';
import { StyledHr } from './styled';

const Hr = props => {
  const { className } = props;

  return (
    <StyledHr backgroundColor="ice" height="2" className={className} />
  );
}

Hr.defaultProps = {
  backgroundColor: null,
  height: null,
  className: null,
}

Hr.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  className: PropTypes.string,
}

export default Hr;
