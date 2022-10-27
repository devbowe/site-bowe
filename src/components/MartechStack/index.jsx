import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledSubTitle } from './styled';
import { Container } from 'react-bootstrap';
import iconCloud from '../../assets/img/icon-cloud.svg';
import iconTarget from '../../assets/img/icon-target.svg';
import iconStar from '../../assets/img/icon-star.svg';
import iconMoney from '../../assets/img/icon-money.svg';
import iconSquare from '../../assets/img/icon-square.svg';
import iconIma from '../../assets/img/icon-ima.svg';
import btnPlus from '../../assets/img/btn-plus.svg';
import BarMartech from '../../assets/img/bar-martech.svg';
import ReactTooltip from 'react-tooltip';

import AgendorImg from '../../assets/img/martech-stack/agendor.png';
import DinamizeImg from '../../assets/img/martech-stack/dinamize.png';
import EconodataImg from '../../assets/img/martech-stack/econodata.png';
import EloquaImg from '../../assets/img/martech-stack/eloqua.png';
import GoogleAnalyticsImg from '../../assets/img/martech-stack/google-analytics.png';
import hotjarImg from '../../assets/img/martech-stack/hotjar.png';
import HubspotImg from '../../assets/img/martech-stack/hubspot.png';
import IntercomImg from '../../assets/img/martech-stack/intercom.png';
import MailChimpImg from '../../assets/img/martech-stack/mailchimp.png';
import MarketCloudImg from '../../assets/img/martech-stack/marketcloud.png';
import MarketoImg from '../../assets/img/martech-stack/marketo.png';
import MoskitImg from '../../assets/img/martech-stack/moskit.png';
import NectarCrmImg from '../../assets/img/martech-stack/nectarcrm.png';
import NeowayImg from '../../assets/img/martech-stack/neoway.png';
import NovaVidaImg from '../../assets/img/martech-stack/novavida.png';
import PipeDriveImg from '../../assets/img/martech-stack/pipedrive.png';
import PipeRunImg from '../../assets/img/martech-stack/piperun.png';
import PipzImg from '../../assets/img/martech-stack/pipz.png';
import PloomesImg from '../../assets/img/martech-stack/ploomes.png';
import PlugaImg from '../../assets/img/martech-stack/pluga.png';
import PowerBiImg from '../../assets/img/martech-stack/powerbi.png';
import PythonImg from '../../assets/img/martech-stack/python.png';
import RdCrmImg from '../../assets/img/martech-stack/rd-crm.png';
import RdStationImg from '../../assets/img/martech-stack/rd-station.png';
import SalesForceImg from '../../assets/img/martech-stack/salesforce.png';
import SemRushImg from '../../assets/img/martech-stack/semrush.png';
import SharpSpringImg from '../../assets/img/martech-stack/sharpspring.png';
import SqlImg from '../../assets/img/martech-stack/sql.png';
import UplexisImg from '../../assets/img/martech-stack/uplexis.png';
import ZapierImg from '../../assets/img/martech-stack/zapier.png';
import ZendeskImg from '../../assets/img/martech-stack/zendesk.png';
import ExactImg from '../../assets/img/martech-stack/exact.png';
import MeetimeImg from '../../assets/img/martech-stack/meetime.png';
import RamperImg from '../../assets/img/martech-stack/ramper.png';

import './marteckStack.css';

const MartechStack = props => {
  const { className } = props;

  const arrayDemandGenerationImg = [
    { img: RdStationImg, alt: "RD Station"},
    { img: MarketoImg, alt: "Marketo"},
    { img: MarketCloudImg, alt: "Marketing Cloud"},
    { img: EloquaImg, alt: "Eloqua"},
    { img: HubspotImg, alt: "Hubspot"},
    { img: SharpSpringImg, alt: "Sharp Spring"},
    { img: PipzImg, alt: "Pipz"},
    { img: DinamizeImg, alt: "Dinamize"},
    { img: MailChimpImg, alt: "Mail Chimp"},
  ];
  
  const arrayGestaoVendasImg = [
    { img: MeetimeImg, alt: "RD Station"},
    { img: RamperImg, alt: "Marketo"},
    { img: ExactImg, alt: "Exact"},
    { img: SalesForceImg, alt: "Hubspot"},
    { img: PipeDriveImg, alt: "Sharp Spring"},
    { img: HubspotImg, alt: "Pipz"},
    { img: NectarCrmImg, alt: "Nectar CRM"},
    { img: PloomesImg, alt: "Ploomes"},
    { img: AgendorImg, alt: "Agendor"},
    { img: PipeRunImg, alt: "Piperun"},
    { img: MoskitImg, alt: "Moskit"},
    { img: RdCrmImg, alt: "RD CRM"},
  ];

  const arrayRetencaoImg = [
    { img: IntercomImg},
    { img: ZendeskImg},
    { img: NeowayImg},
    { img: UplexisImg},
    { img: NovaVidaImg},
    { img: EconodataImg},
  ];
  
  const arrayUpsellImg = [
    { img: SqlImg},
    { img: PythonImg},
    { img: GoogleAnalyticsImg},
    { img: PowerBiImg},
  ];

  const arrayAnaliseImg = [
    { img: hotjarImg},
    { img: SemRushImg},
    { img: GoogleAnalyticsImg}
  ];

  const arrayIntegracaoImg = [
    { img: PlugaImg},
    { img: ZapierImg},
  ];

  return (
    <section className={className}>
      <Container id="martech-wraper">
        
        <StyledTitle textColor="dark" className="text-center">
          <StyledTitle className="h2 font-weight-bold">Martech Stack</StyledTitle>
        </StyledTitle>

        <StyledSubTitle textColor="lightGray" className="text-center mt-3">
          Ferramentas sob medida para <br/>
          cada etapa da sua operação
        </StyledSubTitle>

        <div className="text-center d-lg-block d-xl-block" id="marteck-container">
          {/* <StyledImage src={martechStack} className="w-100" /> */}
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 box">
                <div className="item">

                  <div className="info">
                    <img src={iconIma} alt=""/>
                    <h4 className="mt-1">
                      Geração de Demanda <br/>
                      <span>(Inbound e Outbound)</span>
                    </h4>
                  </div>
                  
                  <ReactTooltip html={true} backgroundColor="#FFF"/>
                  <a
                    data-place="top"
                    data-tip={`<div style="display: grid; grid-template-columns: 1fr 1fr; justify-content: center;">${arrayDemandGenerationImg.map((item, index) => {
                      return `<img style="margin: 8px; max-width: 90px" key=${index} src=${item.img} alt=${item.alt}/>`;
                    })}</div>`}
                    data-class="poupup-tooltip"
                    data-html={true}>
                    <img src={btnPlus} alt=""/>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-3 box">
                <div className="item">
                  <div className="info">
                    <img src={iconTarget} alt=""/>
                    <h4 className="mt-1">Gestão de Vendas</h4>
                  </div>
                  <a
                    data-place="top"
                    data-tip={`<div style="display: grid; grid-template-columns: 1fr 1fr">${arrayGestaoVendasImg.map((item, index) => {
                      return `<img style="margin: 8px; max-width: 90px" key=${index} src=${item.img} alt=${item.alt}/>`;
                    })}</div>`} 
                    data-class="poupup-tooltip"
                    data-html={true}>
                    <img src={btnPlus} alt=""/>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-3 box">
                <div className="item">
                  <div className="info">
                    <img src={iconStar} alt=""/>
                    <h4>Retenção e Fidelização</h4>
                  </div>
                  <a
                    data-place="top"
                    data-tip={`<div style="display: grid; grid-template-columns: 1fr 1fr">${arrayRetencaoImg.map((item, index) => {
                      return `<img style="margin: 8px; max-width: 90px" key=${index} src=${item.img} alt=${item.alt}/>`;
                    })}</div>`} 
                    data-class="poupup-tooltip"
                    data-html={true}>
                    <img src={btnPlus} alt=""/>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-3 box">
                <div className="item">
                  <div className="info">
                    <img src={iconMoney} alt=""/>
                    <h4 className="mt-1">Upsell / Cross Sell</h4>
                  </div>
                  <a
                    data-place="top"
                    data-tip={`<div style="display: grid; grid-template-columns: 1fr 1fr">${arrayUpsellImg.map((item, index) => {
                      return `<img style="margin: 8px; max-width: 90px" key=${index} src=${item.img} alt=${item.alt}/>`;
                    })}</div>`} 
                    data-class="poupup-tooltip"
                    data-html={true}>
                    <img src={btnPlus} alt=""/>
                  </a>
                </div>
              </div>

            </div>
          
            
          </div>
        </div>

        <div className="d-sm-none d-none d-lg-block d-xl-block" id="marteck-bar">
          <div className="container">
            <div className="box-bar">
              <div className="icon-info">
                <div className="title">
                  <img src={iconCloud} alt=""/>
                  <h4 className="mt-1">Análise de Dados</h4>
                </div>
                <div className="button">
                  <a
                  data-place="top"
                  data-tip={`<div style="display: grid; grid-template-columns: 1fr 1fr">${arrayAnaliseImg.map((item, index) => {
                    return `<img style="margin: 8px; max-width: 90px" key=${index} src=${item.img} alt=${item.alt}/>`;
                  })}</div>`}
                  data-class="poupup-tooltip"
                  data-html={true}>
                    <img src={btnPlus} />
                  </a>
                </div>
              </div>
              <img className="barMartechImg" src={BarMartech} alt=""/>
              <div className="icon-info">
                <div className="title">
                  <img src={iconSquare} alt=""/>
                  <h4 className="mt-1">Integração</h4>
                </div>
                <div className="button">
                  <a
                  data-place="top"
                  data-tip={`<div style="display: grid; grid-template-columns: 1fr 1fr">${arrayIntegracaoImg.map((item, index) => {
                    return `<img style="margin: 8px; max-width: 90px" key=${index} src=${item.img} alt=${item.alt}/>`;
                  })}</div>`}
                  data-class="poupup-tooltip"
                  data-html={true}>
                    <img src={btnPlus} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </Container>

    </section>
  );
}

MartechStack.defaultProps = {
  className: null,
}

MartechStack.propTypes = {
  className: PropTypes.string,
}

export default MartechStack;
