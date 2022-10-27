import React, { useState, useEffect } from 'react';
import Typography from '../Typography';
import * as S from './styled';
import Algar from '../../assets/img/algar.png';
import Lenovo from '../../assets/img/lenovo.png';
import PagarMe from '../../assets/img/pagar.me.png';
import imgResultsAlgar from '../../assets/img/resultsAlgar.svg';
import imgResultsLenovo from '../../assets/img/resultsLenovo.svg';
import imgResultsPagarme from '../../assets/img/resultsPagarme.svg';

const Hover = () => {
  const [numberBox, setNumberBox] = useState(1);
  useEffect(() => {
    const time = setTimeout(() => {
      numberBox === 4 ? setNumberBox(1) : setNumberBox(numberBox + 1);
      return numberBox;
    }, 20000);
    return () => clearTimeout(time)
  }, [numberBox])

  const colors = {
    1: 'brandGreen',
    2: 'brandRed',
    3: 'darkBlue'
  }
  const bgColor = {
    1: 'brandGreen',
    2: 'brandRed',
    3: 'darkBlue'
  }

  const title = {
    1: 'R$1 MILHÃO EM VENDAS',
    2: '+ 8,2 MILHÕES',
    3: '116%'
  }

  const subtitle = {
    1: 'durante 9 meses usando estratégias orgânicas de inbound.',
    2: 'em vendas',
    3: 'de aumento de leads orgânicos'
  }

  const percentage = {
    1: '+318%',
    2: '+ 2.500',
    3: '61%',
    pagarMe: '45%',
    lenovo1: '+ 850.000',
    lenovo2: '+ 16.500',
  }

  const content = {
    1: 'de aumento em tráfego no blog.',
    2: 'máquinas vendidas',
    3: 'de aumento das conversões de leads',
    pagarMe: 'de aumento da taxa de conversão leads em leads qualificados',
    lenovo1: 'em mídia geridos',
    lenovo2: 'cotações',
  }

  const footer = {
    1: { tag: '#InboundMarketing', link: '/demand-generation' },
    2: { tag: '#GeraçãodeDemanda', link: '/demand-generation' },
    3: { tag: '#PerformanceDigital', link: '/demand-generation' },
    4: { tag: '#AppBuilder', link: '/builder' },
    5: { tag: '#InboundMarketing', link: '/builder' },
  }

  const images = {
    1: imgResultsAlgar,
    2: imgResultsLenovo,
    3: imgResultsPagarme
  }

  return (
    <S.ResponsiveFlex>
      <S.Column>
        <Typography type="h3" color="secondary">
          Respiramos<br />resultados
        </Typography>
        <Typography type="body" color="secondary" mt="20px">
          Somos movidos por indicadores e metas. Escolhidos pelas<br />
        empresas que mais avançam nesse novo mundo.
        </Typography>
        <S.Flex margin="50px 0px 0px 0px">
          <S.Button
            logoColor={numberBox === 1}
            onMouseEnter={() => setNumberBox(1)}
            onClick={numberBox !== 1
              ? () => setNumberBox(1)
              : () => setNumberBox(1)}>
            <S.Column align>
              <div>
                <img src={Algar} />
              </div>
              <S.line
                selectedBox={numberBox}
                lineColor={numberBox === 1 && colors[numberBox]} />
            </S.Column>
          </S.Button>

          <S.Button
            logoColor={numberBox === 2}
            onMouseEnter={() => setNumberBox(2)}
            onClick={numberBox !== 2
              ? () => setNumberBox(2)
              : () => setNumberBox(2)}>
            <S.Column align>
              <div>
                <img src={Lenovo} />
              </div>
              <S.line
                selectedBox={numberBox}
                lineColor={numberBox === 2 && colors[numberBox]} />
            </S.Column>
          </S.Button>

          <S.Button
            logoColor={numberBox === 3}
            onMouseEnter={() => setNumberBox(3)}
            onClick={numberBox !== 3
              ? () => setNumberBox(3)
              : () => setNumberBox(3)}>
            <S.Column align>
              <div>
                <img src={PagarMe} />
              </div>
              <S.line
                selectedBox={numberBox}
                lineColor={numberBox === 3 && colors[numberBox]} />
            </S.Column>
          </S.Button>

        </S.Flex>
      </S.Column>
      <S.InfoSquare bg={bgColor[numberBox]}>
        <S.InfoContent>
          <S.ContainerTitle>
            <Typography type="h4">{title[numberBox]}</Typography>
            <Typography type="body" mt="10px">{subtitle[numberBox]}</Typography>
            {numberBox === 2 || numberBox === 3 ?
              <>
                {numberBox === 3 &&
                  <>
                    <Typography type="h4" mt="40px">{percentage[numberBox]}</Typography>
                    <Typography type="body">{content[numberBox]}</Typography>
                    <Typography type="h4" mt="40px">{percentage.pagarMe}</Typography>
                    <Typography type="body">{content.pagarMe}</Typography>
                  </>
                }
                {numberBox === 2 &&
                  <>
                    <Typography type="h4" mt="40px">{percentage[numberBox]}</Typography>
                    <Typography type="body">{content[numberBox]}</Typography>
                    <Typography type="h4" mt="40px">{percentage.lenovo1}</Typography>
                    <Typography type="body">{content.lenovo1}</Typography>
                    <Typography type="h4" mt="40px">{percentage.lenovo2}</Typography>
                    <Typography type="body">{content.lenovo2}</Typography>
                  </>
                }
              </>
              :
              <>
                <Typography type="h4" mt="40px">{percentage[numberBox]}</Typography>
                <Typography type="body">{content[numberBox]}</Typography>
              </>}
            <a href={footer[numberBox].link}>
              <Typography type="body" mt="50px" className="text-decoration-none">{footer[numberBox].tag}</Typography>
            </a>
          </S.ContainerTitle>
          <S.containerImages>
            <img src={images[numberBox]} alt="Bowe"/>
          </S.containerImages>
        </S.InfoContent>
      </S.InfoSquare>
    </S.ResponsiveFlex >
  )
}

export default Hover;
