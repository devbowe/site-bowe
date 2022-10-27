import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Col, Row } from "react-bootstrap"

import pageWraper from "../../default/pageWrapper"
import {
  Spacing,
  Footer,
  TileBlocks,
  TileBlocksImg,
  Header,
  Layout,
  InfoTitle,
  CardsContainer,
  Hr,
  ContactForm,
  MarketingChart,
} from "../../index"

import { StyleHorseContainer } from "./styled"

import Fish from "../../../assets/img/fish.svg"
import TroiaHorse from "../../../assets/img/troiaRed.svg"

import iconComunicacao from "../../../assets/img/icon-comunicacao.svg"
import iconMensuracao from "../../../assets/img/icon-mensuracao.svg"
import iconPerformance from "../../../assets/img/icon-performance.svg"
import iconClientes from "../../../assets/img/icon-clientes.svg"

import AlgarTelecom from "../../../assets/img/algarTelecom.png"
import Stone from "../../../assets/img/stone.png"
import LenovoBg from "../../../assets/img/lenovoBg.png"
import PagarMe from "../../../assets/img/pagar.me.png"
import BRQ from "../../../assets/img/logos/brq.webp"
import Ultragas from "../../../assets/img/ultragas.png"
import ZoopImg from "../../../assets/img/zoop-logo.png"
import SapImg from "../../../assets/img/sap-logo.png"

const AbmPage = () => {
  const headerProps = {
    title: "Account-Based Marketing - ABM",
    textPrimary: "Para empresas que buscam",
    writeMachine: "abm",
    textContent: [
      "Conheça o Programa de ABM (Account-Based Marketing) da Bowe",
      "Estratégias de marketing altamente personalizadas com foco em contas estratégicas, novos negócios e rentabilização de carteira.",
    ],
    minHeight: true,
    textButton: "explorar ABM",
    buttonClick: () => scrollTo("#contact"),
    colorTextTitle: "light",
    colorTextSpotlight: "light",
    colorTextPrimary: "black",
    colorTextContent: "light",
    colorTextButton: "light",
    colorBackgroundButton: "black",
    hoverColorButton: "darkBlue",
    squareButton: false,
    urlImg: Fish,
    theme: "red",
  }

  const firstSolution = {
    textSpotlight: "Surpreenda seus clientes e vá mais longe",
    textContent: `O marketing baseado em contas (ABM) é altamente direcionado e 
    customizado, ajudando a estabelecer relacionamentos duradouros e confiáveis 
    com clientes e prospects, o que resulta na redução do seu ciclo de vendas e 
    aumento do seu retorno sobre investimento (ROI).`,
    textButton: "quero mais vendas com o ABM Bowe",
    buttonClick: () => scrollTo("#contact"),
    colorTextSpotlight: "black",
    colorTextPrimary: "black",
    colorTextContent: "lightGray",
    colorTextButton: "light",
    colorBackgroundButton: "red",
    hoverColorButton: "lightRed",
    squareButton: false,
  }

  const transformedBrands = [
    { href: "https://www.lenovo.com/BR/pt/", img: LenovoBg },
    { href: "https://zoop.com.br/", img: ZoopImg },
    { href: "https://www.sap.com/brazil/index.html", img: SapImg },
  ]

  const tileBlocks = [
    { name: "Demand Generation B2B", link: "/demand-generation" },
    { name: "Consulting", link: "/consulting" },
    { name: "Martech", link: "/martech" },
    { name: "Business Intelligence", link: "/data-intelligence/" },
  ]

  const cards = [
    {
      name: "Comunicação mais assertiva no online e offline",
      icon: iconComunicacao,
    },
    {
      name: "Mensuração de resultados e decisões baseadas em dados",
      icon: iconMensuracao,
    },
    {
      name: "Aumento da performance do seu time de key accounts",
      icon: iconPerformance,
    },
    {
      name: "Clientes que se transformam em embaixadores da marca",
      icon: iconClientes,
    },
  ]

  const tileBlocksImgHelpers = [
    { href: "https://www.algartelecom.com.br/", img: AlgarTelecom },
    { href: "https://www.stone.com.br/", img: Stone },
    { href: "https://www.lenovo.com/BR/pt/", img: LenovoBg },
    { href: "https://pagar.me/", img: PagarMe },
    { href: "https://www.brq.com/", img: BRQ },
    { href: "https://www.ultragaz.com.br/", img: Ultragas },
  ]

  return (
    <>
      <Header {...headerProps} />
      <Layout>
        <Row className="mx-4 mx-sm-4 mx-md-4 mx-lg-4 mx-xl-5 px-sm-4 px-md-4 px-lg-4 px-xl-5">
          <Spacing p="6rem 0">
            <section className="d-flex justify-content-between align-items-start align-items-lg-center align-items-xl-center flex-column flex-lg-row flex-xl-row">
              <Col className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 p-0 d-flex align-items-center">
                <InfoTitle {...firstSolution} />
              </Col>
              <Col className="col- col-lg-4 col-xl-4 pt-5 d-flex flex-column justify-content-center align-items-center text-center">
                <TileBlocksImg
                  imagesHasSpacing={false}
                  imagesCenter={true}
                  title="Marcas que já foram Transformadas"
                  list={transformedBrands}
                />
              </Col>
            </section>
          </Spacing>
        </Row>

        <br />

        <div id="abm">
          <CardsContainer
            buttonClick={() => scrollTo("#contact")}
            classCol="col-12 col-sm-12 col-md-10 mb-md-5 col-lg-3 col-xl-3"
            color="light"
            list={cards}
            bgColor="red"
            title="Resultados exponenciais no longo prazo"
            subTitle="Com o ABM Bowe, alcance novas contas e eleve seu faturamento com cross-sell e up sell, aumentando também o LTV (Lifetime Value) dos seus clientes."
            classBlock="py-5 px-1 px-md-3 px-lg-3 px-xl-3 d-flex flex-column column-item"
            titleButton="quero aumentar meu ROI"
            textColorButton="red"
            opacity="0.1"
          />
        </div>

        <MarketingChart color="red" className="py-5" />

        <div id="contact">
          <StyleHorseContainer troiaHorse={TroiaHorse}>
            <Row className="my-mb-5 my-lg-5 my-xl-5 mx-3 px-0 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-4 px-xl-4">
              <div className="mb-5">
                <Row>
                  <Col className="col-12 px-3 px-sm-5 px-md-5">
                    <ContactForm
                      defaultNamePage="ABM"
                      defaultUtmSource="site"
                      defaultUtmMedium="abm"
                      defaultUtmCampaign="bw_site"
                      defaultUtmContent=" "
                      formTitle={[
                        { color: "black", text: "Quer implementar" },
                        { color: "red", text: "Account Based Marketing" },
                        {
                          color: "black",
                          text: "em sua estratégia de marketing?",
                        },
                      ]}
                      color="red"
                      textColor="light"
                      formSubTitle="Fale com nossos especialistas e descubra como."
                      colorHover="lightRed"
                      textButton="quero conhecer o ABM Bowe"
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
            color="red"
            hoverColor="brandRed"
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
  AbmPage,
  "red",
  "Bowe | Abm",
  "https://www.bowe.com.br/abm-guia/"
)
