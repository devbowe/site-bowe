import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledImage } from './styled';
import marketingChart from '../../assets/img/marketing-chart.svg';
import { Container } from 'react-bootstrap';
import Spacing from '../Spacing';

const MarketingChart = props => {
  const { className, color } = props;

  return (
    <section className={className}>
      <Spacing p="100px 0px 100px 0px">
        <Container>
          <StyledTitle textColor="black" className="text-center">
            <StyledTitle className="h2 font-weight-bold">Integre Marketing e Vendas e pare de </StyledTitle>
            <StyledTitle className="h2 font-weight-bold" textColor={color}>perder mercado para seus concorrentes</StyledTitle>
          </StyledTitle>
          <div className="text-center mt-5">
            <StyledImage src={marketingChart} className="w-100" />
          </div>
        </Container>
      </Spacing>
    </section>
  );
}

MarketingChart.defaultProps = {
  color: null,
  className: null,
}

MarketingChart.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
}

export default MarketingChart;
