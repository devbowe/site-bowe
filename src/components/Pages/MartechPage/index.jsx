import React from "react"
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
  MartechStack,
} from "../../index"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Col, Row } from "react-bootstrap"
import { StyleHorseContainer, StyledMap } from "./styled"

import Fish from "../../../assets/img/fish.svg"
import MapImg from "../../../assets/img/map.svg"
import TroiaHorse from "../../../assets/img/troiaRed.svg"

import AlgarTelecom from "../../../assets/img/algarTelecom.png"
import Stone from "../../../assets/img/stone.png"
import LenovoBg from "../../../assets/img/lenovoBg.png"
import PagarMe from "../../../assets/img/pagar.me.png"
import BRQ from "../../../assets/img/logos/brq.webp"
import Ultragas from "../../../assets/img/ultragas.png"

import "./martechPage.css"

const MartechPage = () => {
  const headerProps = {
    title: "MARTECH",
    textPrimary: "Transforme seu marketing com ",
    writeMachine: "martech",
    textContent: [
      "Martech é a evolução do Marketing aliado à tecnologia para levar seu negócio ao próximo nível.",
      "Estratégias sob medida para aquisição de leads qualificados e conversão de clientes.",
    ],
    textButton: "quero mais tecnologia",
    minHeight: true,
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
    classUrlImg: "col-md-6 col-lg-6 col-xl-5",
    theme: "red",
  }

  const infoPercentageData = {
    data: [
      {
        percentage: "41%",
        text:
          "das empresas brasileiras ainda utilizam ferramentas de marketing manuais.",
      },
      {
        percentage: "40%",
        text:
          "das empresas ainda não utilizam nenhum tipo de automação de marketing.",
      },
      {
        percentage: "38%",
        text: "das empresas investem em ferramentas que coletam dados.",
      },
      {
        percentage: "9%",
        text:
          "das empresas têm ferramentas de Marketing, Vendas e Pós-Vendas totalmente conectadas.",
      },
    ],
    colorTextContentPercentage: "red",
    textPrimary: "Big numbers, big problems",
    textSub: "O atual cenário de Martech no Brasil",
    colorTextSub: "lightGray",
    textButton: "quero mais tecnologia",
    infoButton: () => scrollTo("#contact"),
    colorTextPrimary: "black",
    colorTextButton: "light",
    colorBackgroundButton: "red",
    hoverColorButton: "lightRed",
    squareButton: false,
  }

  const tileBlocks = [
    { name: "Demand Generation B2B", link: "/demand-generation" },
    { name: "Consulting", link: "/consulting" },
    { name: "ABM", link: "/abm" },
    { name: "Business Intelligence", link: "/data-intelligence" },
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
      title: "Mapeamento de dores",
      topics: [
        "Entendemos qual a dor devemos solucionar com ferramentas",
        "Mapeamos quais dados deverão ser integrados",
        "Definimos ferramentas sob medida para cada etapa da sua operação",
      ],
    },
    {
      number: "02",
      title: "Setting",
      topics: [
        "Criamos um funil de vendas com base no stack",
        "Configuramos o CRM",
        "Configuramos tracking e tagueamento",
        "Configuramos indicadores e dados",
        "Integramos as ferramentas",
      ],
    },
    {
      number: "03",
      title: "Pay & Flow",
      topics: [
        "Estudamos a aderência das ferramentas",
        "Medimos melhoras em gestão, automação e escalabilidade de processos",
        "Criamos workshops com a equipe para otimizar o uso",
        "Criamos flows para compartilhamento de dados",
        "Mensuramos resultados das estratégias de funil",
        "Criamos projeções de demanda e forecasts de venda",
        "Definimos novos indicadores de acordo com a evolução das metas",
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
              <InfoPercentage {...infoPercentageData} />
            </Col>
          </section>
        </section>

        <Row className="d-flex d-md-none pb-5 m-0">
          <section className="d-flex py-5 mx-4 justify-content-sm-center align-items-center flex-column">
            <Col className="col-12 px-0 pt-5 d-flex align-items-center">
              <InfoPercentage {...infoPercentageData} />
            </Col>
          </section>
          <section className="d-flex justify-content-sm-center align-items-center flex-column">
            <Col className="col-12 mb-sm-5 p-0 d-flex justify-content-start align-items-start">
              <StyledMap src={MapImg}></StyledMap>
            </Col>
          </section>
        </Row>

        <MartechStack className="py-5" />

        {/* <section className="d-flex py-5 justify-content-center align-items-center">
          <Col className="col-8 col-sm-5 col-md-4 col-lg-4 col-xl-3 p-0 d-flex flex-column justify-content-center align-items-center">
            <div
              className="partners-transforms"
              style={{ width: "fit-content" }}
            >
              <TileBlocksImg
                title="Marcas que já foram Transformadas"
                list={transformedBrands}
              />
            </div>
          </Col>
        </section> */}

        <br />
        <section className="d-none d-lg-block my-5">
          <VerticalTabSwitcher
            colorTitle="black"
            colorSubTitle="light"
            backgroundColor="red"
            color="black"
            menuItemColor="red"
            title="A metodologia correta"
            subtitle="para transformar números em ativos acionáveis"
            data={methodology}
          />
        </section>
        <section className="d-lg-none my-5 px-4 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 px-sm-5 px-md-5 px-lg-5 px-xl-5">
          <VerticalTabSwitcherMobile
            backgroundColor="light"
            color="black"
            menuItemColor="red"
            title="A metodologia correta"
            subtitle="para transformar números em ativos acionáveis"
            data={methodology}
          />
        </section>

        <section className="d-flex justify-content-center align-items-center pt-5">
          <Col className="col-12 col-md-7 col-lg-8 col-xl-7">
            <InfoTitle
              buttonClick={() => scrollTo("#contact")}
              colorTextButton="light"
              textCenter={true}
              textPrimary="Você sabia que é possível"
              textSpotlight="automatizar processos de ponta a ponta?"
              colorTextSpotlight="red"
              colorTextPrimary="black"
              colorTextContent="lightGray"
              colorBackgroundButton="red"
              hoverColorButton="lightRed"
              cursor={true}
              textContent="Realize upgrades e atualizações constantes com as melhores tecnologias do mercado em Marketing e Vendas, estando sempre apto para a próxima evolução."
              textButton="quero mais tecnologia"
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
                      defaultNamePage="Martech"
                      defaultUtmSource="site"
                      defaultUtmMedium="martech"
                      defaultUtmCampaign="bw_site"
                      defaultUtmContent=" "
                      formTitle={[
                        {
                          color: "black",
                          text: "Use a tecnologia a seu favor",
                        },
                      ]}
                      color="red"
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
  MartechPage,
  "red",
  "Bowe | Martech",
  "https://www.bowe.com.br/martech/"
)
