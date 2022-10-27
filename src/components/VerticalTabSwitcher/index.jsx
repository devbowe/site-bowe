/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledTitle, StyledSubTitle, StyledContainerLeft, StyledContainerRight, StyledItemLink, StyledContainerSideways } from './styled';
import Typography from '../Typography';
import './verticalTabSwitcher.css'
import Spacing from '../Spacing';

const VerticalTabSwitcher = props => {
  const { color, colorTitle, colorSubTitle, menuItemColor, backgroundColor, title, subtitle, data } = props;
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  return (
    <StyledContainer backgroundColor={backgroundColor} className={backgroundColor === 'red' ? "py-5 bd-img position-relative" : "py-5 position-relative"}>
      <Spacing p="50px 0 50px 0">
        <StyledTitle textColor={colorTitle} className="text-center">
          <Typography color={color} type="h4">{title}</Typography>
        </StyledTitle>
        <StyledSubTitle textColor={colorSubTitle} className="text-center mt-2">{subtitle}</StyledSubTitle>

        <section className="zindex-1 d-flex justify-content-md-center justify-content-lg-center justify-content-xl-center mt-4" >
          <StyledContainerSideways className="zindex-1 d-flex mx-md-5 mx-lg-5 mx-xl-5 mt-5 pt-5 pt-md-0 pt-lg-0 pt-xl-0 sideways">
            <StyledContainerLeft backgroundColor={backgroundColor === 'red' ? "light" : "almostWhite"} className="d-flex flex-column pl-3 py-3 hidden-scrollbar">
              {data != null && data.map((item, index) => (
                <StyledItemLink
                  key={index}
                  className="pl-3 pr-5 py-3"
                  color={activeMenuIndex === index ? backgroundColor === 'red' ? 'light' : menuItemColor : color}
                  colorActive={backgroundColor === 'red' ? activeMenuIndex === index ? 'light' : backgroundColor : menuItemColor}
                  borderColorActive={activeMenuIndex === index ? backgroundColor === 'red' ? backgroundColor : 'light' : 'transparent'}
                  backgroundColor={activeMenuIndex === index ? backgroundColor === 'red' ? backgroundColor : 'light' : null}
                  onClick={() => setActiveMenuIndex(index)}
                >
                  <span>{item.title}</span>
                </StyledItemLink>
              ))}
            </StyledContainerLeft>
            <StyledContainerRight backgroundColor={backgroundColor === 'red' ? 'transparent' : 'light'} className="d-flex flex-grow-1 align-items-md-center">
              {data != null && activeMenuIndex >= 0 && (
                <div className="py-3 px-5 content-container">
                  <StyledTitle textColor={backgroundColor === 'red' ? 'light' : menuItemColor}>
                    <Typography type="h2">{data[activeMenuIndex].number}</Typography>
                  </StyledTitle>
                  <StyledTitle textColor={color} className="mt-3">
                    <h3 className="font-weight-bold">{data[activeMenuIndex].title}</h3>
                  </StyledTitle>
                  <div className="mt-4">
                    <ul>
                      {data[activeMenuIndex].topics != null && data[activeMenuIndex].topics.map(topic => (
                        <StyledTitle textColor={backgroundColor === 'red' ? 'light' : color}>
                          <li className="my-3">&bull; {topic}</li>
                        </StyledTitle>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </StyledContainerRight>
          </StyledContainerSideways>
        </section>
      </Spacing>
    </StyledContainer>
  );
}

VerticalTabSwitcher.defaultProps = {
  className: null,
}

VerticalTabSwitcher.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.number.isRequired,
  menuItemColor: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default VerticalTabSwitcher;
