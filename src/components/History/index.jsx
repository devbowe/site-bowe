/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledTitle, StyledSubTitle, StyledContainerLeft, StyledContainerRight, StyledItemLink, StyledContainerSideways, Indicator, InfoWrapper } from './styled';
import Typography from '../Typography';
import '../VerticalTabSwitcher/verticalTabSwitcher.css'
import Spacing from '../Spacing';


const History = props => {
    const { color, colorTitle, colorSubTitle, menuItemColor, backgroundColor, title, name, subtitle, data } = props;
    const [activeMenuIndex, setActiveMenuIndex] = useState(0);

    return (
        <StyledContainer backgroundColor={backgroundColor} className={backgroundColor === 'grayColor' ? "py-5 pl-5 bd-img position-relative" : "py-5 position-relative"}>
            <Spacing p="100px 0 100px 0">
                <StyledTitle textColor={colorTitle} className="text-center">
                    <Typography type="h4">
                        {title}
                        <strong>{name}</strong>
                    </Typography>
                </StyledTitle>
                <StyledSubTitle textColor={colorSubTitle} className="text-center mt-2">{subtitle}</StyledSubTitle>
                <section className="zindex-1 d-flex justify-content-md-center justify-content-lg-center justify-content-xl-center mt-4" >
                    <StyledContainerSideways className="zindex-1 d-flex mx-md-5 mx-lg-5 mx-xl-5 pt-md-0 pt-lg-0 pt-xl-0 sideways">
                        <hr />
                        <StyledContainerLeft className="d-flex">

                            {data != null && data.map((item, index) => (
                                <StyledItemLink
                                    key={index}
                                    className={item.year}
                                    color={activeMenuIndex === index ? backgroundColor === 'light' ? 'black' : backgroundColor : 'grayColor'}
                                    colorActive={backgroundColor === 'grayColor' ? activeMenuIndex === index ? 'brandRed' : backgroundColor : 'brandRed'}
                                    borderColorActive={activeMenuIndex === index ? backgroundColor === 'brandRed' ? backgroundColor : 'brandRed' : 'grayColor'}
                                    backgroundColor={activeMenuIndex === index ? backgroundColor === 'brandRed' ? backgroundColor : 'transparent' : null}
                                    onClick={() => setActiveMenuIndex(index)}
                                >
                                    <span className="white-space-nowrap">
                                        {item.year}
                                        <Indicator
                                            backgroundColor={activeMenuIndex === index ? backgroundColor === 'grayColor' ? backgroundColor : 'brandRed' : 'grayColor'}
                                        />
                                    </span>
                                </StyledItemLink>
                            ))}
                        </StyledContainerLeft>
                        <StyledContainerRight backgroundColor={backgroundColor === 'brandRed' ? 'transparent' : 'light'} className="d-flex justify-content-md-center justify-content-lg-center justify-content-xl-center mt-4">
                            {data != null && activeMenuIndex >= 0 && (
                                <div className="py-3 px-5 content-container d-flex">
                                    {/* <ImageWrapper className="d-flex">
                                        <img src={data[activeMenuIndex].img} alt={data[activeMenuIndex].title} />
                                    </ImageWrapper> */}
                                    <InfoWrapper >
                                        <StyledTitle textColor={backgroundColor === 'brandRed' ? 'brandRed' : menuItemColor}>
                                            <h3 className="font-weight-bold">{data[activeMenuIndex].title}</h3>
                                        </StyledTitle>
                                        <div className="mt-4">
                                            <ul>
                                                {data[activeMenuIndex].topics != null && data[activeMenuIndex].topics.map(topic => (
                                                    <StyledTitle textColor={backgroundColor === 'brandRed' ? 'brandRed' : color}>
                                                        <span className="my-3">{topic}</span>
                                                    </StyledTitle>

                                                ))}
                                            </ul>
                                        </div>
                                    </InfoWrapper>
                                </div>
                            )}
                        </StyledContainerRight>
                    </StyledContainerSideways>
                </section>
            </Spacing>
        </StyledContainer>
    );
}

History.defaultProps = {
    className: null,
}

History.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.number.isRequired,
    menuItemColor: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired,
    className: PropTypes.string,
}

export default History;
