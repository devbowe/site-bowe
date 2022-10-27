import React from 'react';
import PropTypes from 'prop-types';
import { TrueSpaceDefault, TrueSpaceNoLeft, TrueSpaceNoRight } from './styled';

const Spacing = ({ children, width, m, mr, ml, mt, mb, p, pr, pl, pt, pb, type }) => {
  const typeMap = {
    default: <TrueSpaceDefault
      MaxWidth={width}
      marginFull={m}
      marginLeft={ml}
      marginRight={mr}
      marginBottom={mb}
      marginTop={mt}
      paddingFull={p}
      paddingLeft={pl}
      paddingRight={pr}
      paddingBottom={pb}
      paddingTop={pt}
    >
      {children}
    </TrueSpaceDefault>,
    noRight: <TrueSpaceNoRight
      MaxWidth={width}
      marginFull={m}
      marginLeft={ml}
      marginRight={mr}
      marginBottom={mb}
      marginTop={mt}
      paddingFull={p}
      paddingLeft={pl}
      paddingRight={pr}
      paddingBottom={pb}
      paddingTop={pt}
    >
      {children}
    </TrueSpaceNoRight>,
    noLeft: <TrueSpaceNoLeft
      MaxWidth={width}
      marginFull={m}
      marginLeft={ml}
      marginRight={mr}
      marginBottom={mb}
      marginTop={mt}
      paddingFull={p}
      paddingLeft={pl}
      paddingRight={pr}
      paddingBottom={pb}
      paddingTop={pt}
    >
      {children}
    </TrueSpaceNoLeft>,
  }

  return typeMap[type]

}

Spacing.defaultProps = {
  MaxWidth: '',
  marginFull: '',
  marginLeft: '',
  marginRight: '',
  marginBottom: '',
  marginTop: '',
  paddingFull: '',
  paddingLeft: '',
  paddingRight: '',
  paddingBottom: '',
  paddingTop: '',
  type: 'default',
}

Spacing.propTypes = {
  MaxWidth: PropTypes.string,
  marginFull: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  paddingFull: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingTop: PropTypes.string,
  type: PropTypes.string,
}
export default Spacing;
