import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { StyledTextSpotlight } from './styled';

const WriteMachine = ({ writeType, writeColor }) => {

  const writeTypeMap = {
    abm: ['melhor performance em vendas complexas', 'alcançar e converter contas estratégicas', 'aumentar o ROI em prospecção ativa', 'reduzir o ciclo de vendas complexas'],
    builder: ['transformação digital', 'inovação no negócio', 'melhor experiência para o seu cliente'],
    consulting: ['personalizado', 'integrado', 'autônomo', 'escalável', 'mensurável'],
    dataIntelligence: ['previsibilidade', 'dados concretos', 'redução de riscos', 'indicadores precisos'],
    demandGeneration: ['demanda ativa', 'maturidade de mercado', 'recorrência', 'potencial de retenção'],
    martech: ['real time dashboards', 'arquitetura de dados', 'integrações complexas', 'data lakes'],
    productDesign: ['expansão exponencial', 'desenvolvimento criativo e técnico', 'difundir um produto digital', 'mais usuários e crescimento de marca'],
  }

  return (
    <StyledTextSpotlight writeColor={writeColor}>
      <Typewriter
        options={{
          strings: writeTypeMap[writeType],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </StyledTextSpotlight>
  )
}

WriteMachine.defaultProps = {
  writeTextMachine: [],
  writeColor: 'light',
}

WriteMachine.propTypes = {
  writeTextMachine: PropTypes.array.isRequired,
  writeColor: PropTypes.string,
}

export default WriteMachine;
