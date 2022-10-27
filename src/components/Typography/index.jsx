import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const Typography = ({ context, opacitySubtitle, type, children, color, spanColor, width, opacity, m, ml, mr, mt, mb, className }) => {
  const typeMap = {
    h1: <S.h1 className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.h1>,
    h2: <S.h2 className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.h2>,
    h3: <S.h3 className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.h3>,
    h4: <S.h4 className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.h4>,
    h5: <S.h5 className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.h5>,
    h6: <S.h6 className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.h6>,
    body: <S.body className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.body>,
    spacing: <S.spacing className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.spacing>,
    moreSpacing: <S.moreSpacing className={className} context={context} opacitySubtitle={opacitySubtitle} color={color} spanColor={spanColor} width={width} opacity={opacity} m={m} ml={ml} mr={mr} mt={mt} mb={mb}>{children}</S.moreSpacing>,
  }
  return (
    <>
      {typeMap[type]}
    </>
  )
}
Typography.defaultProps = {
  className: false,
  context: false,
  opacitySubtitle: false,
  type: "p",
  color: "white",
  spanColor: "white",
  width: '100%',
  opacity: '1',
  m: '0',
  ml: '0',
  mr: '0',
  mt: '0',
  mb: '0',
}
Typography.propTypes = {
  className: PropTypes.string,
  context: PropTypes.bool,
  opacitySubtitle: PropTypes.bool,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  spanColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  opacity: PropTypes.string.isRequired,
  m: PropTypes.string.isRequired,
  ml: PropTypes.string.isRequired,
  mr: PropTypes.string.isRequired,
  mt: PropTypes.string.isRequired,
  mb: PropTypes.string.isRequired,
}
export default Typography
