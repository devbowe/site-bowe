/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledTitle, StyledSubTitle, StyledContainerLeft, StyledContainerRight, StyledItemLink, StyledContainerSideways } from './styled';
import Typography from '../Typography';

const VerticalTabSwitcherMobile = props => {
    const { color, menuItemColor, backgroundColor, title, subtitle, data, alignMobile } = props;
    const [activeMenuIndex, setActiveMenuIndex] = useState(0);

    return (
        <StyledContainer backgroundColor={backgroundColor} className="py-5 text-left">
            <StyledTitle textColor={color} className={`${alignMobile ? "alignMobile" : "text-center"}`}>
                <Typography color={color} type="h4">{title}</Typography>
            </StyledTitle>
            <StyledSubTitle textColor={color} className={`${alignMobile ? "alignMobile" : "text-center"} mt-12`}>{subtitle}</StyledSubTitle>
            <StyledContainerSideways className="d-flex mt-5 pt-5 sideways">
                <StyledContainerLeft backgroundColor="almostWhite" className="d-flex flex-column pl-3 py-3 hidden-scrollbar rounded">
                    {data != null && data.map((item, index) => (
                        <StyledItemLink
                            className="pl-3 pr-5 py-3"
                            color={activeMenuIndex === index ? menuItemColor : 'grayColor'}
                            colorActive={menuItemColor}
                            borderColorActive={activeMenuIndex === index ? menuItemColor : 'transparent'}
                            backgroundColor={activeMenuIndex === index ? 'light' : `black`}
                            onClick={() => setActiveMenuIndex(index)}
                        >
                            <span>{item.title}</span>
                        </StyledItemLink>
                    ))}
                </StyledContainerLeft>
                <StyledContainerRight backgroundColor="light" className="d-flex flex-grow-1 align-items-start">
                    {data != null && activeMenuIndex >= 0 && (
                        <div style={{width: 'fit-content'}} className="py-3 px-5 content-container">
                            <StyledTitle textColor={menuItemColor}>
                                <Typography color={color} type="h3">{data[activeMenuIndex].number}</Typography>
                            </StyledTitle>
                            <StyledTitle textColor={color} className="mt-3">
                                <Typography color={color} type="h4">{data[activeMenuIndex].title}</Typography>
                            </StyledTitle>
                            <div className="mt-4">
                                <ul>
                                    {data[activeMenuIndex].topics != null && data[activeMenuIndex].topics.map(topic => (
                                        <li className="my-3">&bull; {topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </StyledContainerRight>
            </StyledContainerSideways>
        </StyledContainer>
    );
}

VerticalTabSwitcherMobile.defaultProps = {
    className: null,
}

VerticalTabSwitcherMobile.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.number.isRequired,
    menuItemColor: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired,
    className: PropTypes.string,
}

export default VerticalTabSwitcherMobile;