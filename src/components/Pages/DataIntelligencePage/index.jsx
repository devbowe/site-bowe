import React, { useMemo } from "react"
import pageWraper from "../../default/pageWrapper"
import {
  Footer,
  TileBlocks,
  TileBlocksImg,
  Header,
  Layout,
  InfoTitle,
  InfoPercentage,
  Hr,
  ContactForm,
  VerticalTabSwitcherMobile,
  VerticalTabSwitcher,
  Spacing,
} from "../../index"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Col, Row } from "react-bootstrap"
import { StyleHorseContainer, StyledMap } from "./styled"

import DataIntelligence from "../../../assets/img/laptopDataIntelligence.png"
import MapImg from "../../../assets/img/map.svg"
import TroiaHorse from "../../../assets/img/troiaBlue.svg"

import AlgarTelecom from "../../../assets/img/algarTelecom.png"
import Stone from "../../../assets/img/stone.png"
import LenovoBg from "../../../assets/img/lenovoBg.png"
import PagarMe from "../../../assets/img/pagar.me.png"
import BRQ from "../../../assets/img/logos/brq.webp"
import Ultragas from "../../../assets/img/ultragas.png"

import "./dataIntelligencePage.css"

const DataIntelligencePage = () => {
  const headerProps = useMemo(
    () => ({
      title: "DATA INTELLIGENCE",
      textPrimary:
        "Entregamos soluções para evolução digital com foco no crescimento de negócios B2B.",
      // writeMachine: "dataIntelligence",
      textContent: [
        "Somos uma empresa de Martech e Geração de Demanda. Nosso time une metodologia, ferramentas, canais e dados com foco obsessivo por resultados e solução de problemas.",
      ],
      textButton: "quero otimizar decisões",
      minHeight: true,
      buttonClick: () => scrollTo("#contact"),
      sensitiveImg: true,
      colorTextTitle: "light",
      colorTextSpotlight: "light",
      colorTextPrimary: "lightBlue",
      colorTextContent: "light",
      colorTextButton: "darkBlueSecondary",
      colorBackgroundButton: "light",
      hoverColorButton: "ice",
      squareButton: false,
      urlImg: DataIntelligence,
      classUrlImg: "col-md-6 col-lg-6 col-xl-5",
      theme: "blue",
    }),
    [scrollTo]
  )

  const infoPercentageData = useMemo(
    () => ({
      data: [
        {
          percentage: "91%",
          text:
            "das empresas brasileiras dedica menos de 1 hora por dia para análise de dados.",
        },
        {
          percentage: "40%",
          text:
            "das empresas geram demanda, mas não sabem definir o que é oportunidade.",
        },
        {
          percentage: "5%",
          text:
            "das empresas conseguem analisar os resultados por canais ou etapa da Jornada de Compra.",
        },
        {
          percentage: "4%",
          text: "das empresas têm uma gestão de dados estruturada.",
        },
      ],
      colorTextContentPercentage: "blue",
      textPrimary: "Big numbers, big problems",
      textSub: "O atual cenário de Data no Brasil",
      colorTextSub: "lightGray",
      textButton: "quero otimizar decisões",
      buttonClick: () => scrollTo("#contact"),
      colorTextPrimary: "darkBlue",
      colorTextButton: "light",
      colorBackgroundButton: "blue",
      hoverColorButton: "darkBlue",

      squareButton: false,
    }),
    [scrollTo]
  )

  const tileBlocks = [
    { name: "Demand Generation B2B", link: "/demand-generation" },
    { name: "ABM", link: "/abm" },
    { name: "Martech", link: "/martech" },
    { name: "Consulting", link: "/consulting" },
  ]

  // const transformedBrands = [
  //   { href: "https://www.lenovo.com/", img: LenovoBg },
  //   { href: "https://algartelecom.com.br/", img: AlgarTelecom },
  //   { href: "https://www.ultragaz.com.br/", img: Ultragas },
  // ]

  const tileBlocksImgHelpers = [
    { href: "https://www.algartelecom.com.br/", img: AlgarTelecom },
    { href: "https://www.stone.com.br/", img: Stone },
    { href: "https://www.lenovo.com/BR/pt/", img: LenovoBg },
    { href: "https://pagar.me/", img: PagarMe },
    { href: "https://www.brq.com/", img: BRQ },
    { href: "https://www.ultragaz.com.br/", img: Ultragas },
  ]

  const methodology = [
    {
      number: "01",
      title: "Análise dos canais de aquisição",
      topics: [
        "Mapeamos seus canais de entrada de dados.",
        "Entendemos quais dados devem ser armazenados.",
        "Definimos indicadores de acordo com canais e metas.",
      ],
    },
    {
      number: "02",
      title: "Tratamento de dados",
      topics: [
        "Escolhemos a dedo ferramentas de armazenamento e análise de dados.",
        "Criamos dashboards para visualização de dados em tempo real.",
        "Definimos quais dados devem ser mensurados por cada setor.",
        "Criamos modelos de atribuição sob medida.",
      ],
    },
    {
      number: "03",
      title: "Compartilhamento",
      topics: [
        "Entendemos quais dados devem ser compartilhados entre setores.",
        "Mapeamos dados para serem compartilhados com os clientes.",
      ],
    },
    {
      number: "04",
      title: "Play & Flow",
      topics: [
        "Integramos ferramentas e configuramos indicadores.",
        "Aplicamos estratégias de Test & Learn para gerar dados.",
        "Trabalhamos em conjunto com seu time para gerar insights.",
      ],
    },
    {
      number: "05",
      title: "Mensuração",
      topics: [
        "Acompanhamos resultados.",
        "Definimos estratégias flexíveis de acordo com resultados.",
      ],
    },
  ]

  return (
    <>
      <Header {...headerProps} />
      <Layout>
        <section className="d-none d-md-flex pb-5 mr-4 pb-xl-5 pb-lg-5 pb-5 mr-4 mr-sm-4 mr-md-4 mr-lg-4 mr-xl-5 pr-sm-4 pr-md-4 pr-lg-4 pr-xl-5">
          <section className="d-flex justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between align-items-center align-items-lg-center align-items-xl-center flex-column flex-md-row flex-lg-row flex-xl-row">
            <Col className="col-12 col-md-6 col-lg-5 col-xl-5 mb-sm-5 mb-md-5 p-0 d-flex justify-content-center align-items-center">
              <StyledMap src={MapImg}></StyledMap>
            </Col>
            <Col className="col-12 col-md-5 col-lg-6 col-xl-6 mb-sm-5 mb-md-5 px-0 mt-md-5 pt-5 d-flex align-items-center">
              <InfoPercentage
                infoButton={() => scrollTo("#contact")}
                {...infoPercentageData}
              />
            </Col>
          </section>
        </section>

        <Row className="d-flex d-md-none pb-5 m-0">
          <section className="d-flex py-5 mx-4 justify-content-sm-center align-items-center flex-column">
            <Col className="col-12 px-0 pt-5 d-flex align-items-center">
              <InfoPercentage
                infoButton={() => scrollTo("#contact")}
                {...infoPercentageData}
              />
            </Col>
          </section>
          <section className="d-flex justify-content-sm-center align-items-center flex-column">
            <Col className="col-12 mb-sm-5 p-0 d-flex justify-content-start align-items-start">
              <StyledMap src={MapImg}></StyledMap>
            </Col>
          </section>
        </Row>

        {/* <section className="d-flex py-5">
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 d-flex flex-column justify-content-center align-items-center">
            <div className="partners-transforms">
              <TileBlocksImg
                title="Marcas que já foram Transformadas"
                list={transformedBrands}
              />
            </div>
          </Col>
        </section> */}

        <br />
        <Spacing p="0">
          <section
            style={{ padding: "6rem 0" }}
            className="d-flex bg-theme-blue justify-content-center align-items-center"
          >
            <Col className="col-12 col-md-8 col-lg-3 col-xl-3">
              <InfoTitle
                buttonClick={() => scrollTo("#contact")}
                colorTextButton="blue"
                textCenter={true}
                textSpotlight="Informação é o novo petróleo"
                textContent="quem dominar a mineração de dados mais rápido, vence a corrida contra a concorrência"
                textButton="quero otimizar decisões"
                colorBackgroundButton="light"
              />
            </Col>
          </section>
        </Spacing>
        <section className="d-none d-lg-block my-5">
          <VerticalTabSwitcher
            colorTitle="black"
            colorSubTitle="black"
            backgroundColor="light"
            color="black"
            menuItemColor="blue"
            title="A metodologia correta"
            subtitle="para transformar números em ativos acionáveis"
            data={methodology}
          />
        </section>
        <section className="d-lg-none my-5 px-4 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 px-sm-5 px-md-5 px-lg-5 px-xl-5">
          <VerticalTabSwitcherMobile
            colorTitle="black"
            backgroundColor="light"
            colorSubTitle="black"
            color="black"
            menuItemColor="blue"
            title="A metodologia correta"
            subtitle="para transformar números em ativos acionáveis"
            data={methodology}
          />
        </section>
        <section className="d-flex justify-content-center align-items-center">
          <Col className="col-12 col-md-10 col-lg-6 col-xl-6">
            <InfoTitle
              buttonClick={() => scrollTo("#contact")}
              colorTextButton="light"
              textCenter={true}
              textPrimary="Você sabia que é possível"
              textSpotlight="agilizar e melhorar a tomada de decisão"
              colorTextSpotlight="blue"
              colorTextPrimary="black"
              colorTextContent="lightGray"
              colorBackgroundButton="blue"
              hoverColorButton="darkBlue"
              cursor={true}
              textContent="Inove constantemente aplicando as melhores tecnologias de dados na sua tomada de decisões, estando sempre apto para a próxima evolução."
              textButton="quero evoluir meu negócio"
            />
          </Col>
        </section>
        <div id="contact">
          <StyleHorseContainer troiaHorse={TroiaHorse}>
            <Row className="my-mb-5 my-lg-5 my-xl-5 mx-3 px-0 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-4 px-xl-4">
              <div className="mb-5">
                <Row>
                  <Col className="col-12 px-4 px-sm-5 px-md-5">
                    <ContactForm
                      defaultNamePage="Data Intelligence"
                      defaultUtmSource="site"
                      defaultUtmMedium="data-intelligence"
                      defaultUtmCampaign="bw_site"
                      defaultUtmContent=" "
                      formTitle={[
                        { color: "black", text: "Saia na frente com dados" },
                      ]}
                      color="blue"
                      textColor="light"
                      formSubTitle="Fale com nossos especialistas e descubra como."
                      colorHover="darkBlue"
                      textButton="solicitar contato"
                    />
                  </Col>
                </Row>
              </div>
            </Row>
          </StyleHorseContainer>
        </div>

        <section className="my-5 px-4 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 px-sm-5 px-md-5 px-lg-5 px-xl-5 ">
          <TileBlocks
            title="Não se limite a apenas uma solução, conheça todas as nossas expertises:"
            color="blue"
            list={tileBlocks}
          />
          <Hr className="my-5" />
          <TileBlocksImg
            title="Sempre gratos às empresas que cocriaram com a gente"
            list={tileBlocksImgHelpers}
          />
        </section>
      </Layout>

      <Footer />
    </>
  )
}

export default pageWraper(
  DataIntelligencePage,
  "blue",
  "Bowe | DataIntelligence",
  "https://www.bowe.com.br/data-intelligence/"
)
