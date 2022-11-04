import React from "react"
import pageWraper from "../../default/pageWrapper"
import ButtonSimple from "../../ButtonSimple"
import {
  Footer,
  TileBlocks,
  TileBlocksImg,
  Header,
  Layout,
  InfoTitle,
  Typography,
  InfoPercentage,
  Hr,
  ContactForm,
  VerticalTabSwitcherMobile,
  VerticalTabSwitcher,
  Spacing,
} from "../../index"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Container, Col, Row } from "react-bootstrap"
import {
  StyleHorseContainer,
  StyledMap,
  StyleContainerAlgar,
  StyleContainerAlgarBorder,
  StyleContainerAlgarPercentage,
  StyleContainerAlgarImage,
  StyleContainerAlgarLogo,
  StyledContainerAlgarText,
  StyledContainerAlgarHeadline,
  StyleContainerAlgarSides,
  StyledFloatingImg,
} from "./styled"

import Fish from "../../../assets/img/fish.svg"
import MapImg from "../../../assets/img/map.svg"
import TroiaHorse from "../../../assets/img/troiaRed.svg"
import Notebook from "../../../assets/img/laptop.svg"
import Algar from "../../../assets/img/algar-white.svg"

import LenovoBg from "../../../assets/img/lenovoBg.png"
import BRQ from "../../../assets/img/logos/brq.webp"

import UnicoLogo from "../../../assets/img/logos/unico.png"
import ZoopLogo from "../../../assets/img/logos/zoop.png"
import EqualsLogo from "../../../assets/img/logos/equals.png"
import TrendMicro from "../../../assets/img/logos/trendmicro.png"
import AdobeLogo from "../../../assets/img/logos/adobe.png"

import "./demandGenerationPage.css"

const DemandGenerationPage = () => {
  const headerProps = {
    title: "DEMAND GENERATION B2B",
    textPrimary: "Gere oportunidades com ",
    writeMachine: "demandGeneration",
    textContent: [
      "Geração de demanda B2B qualificada e recorrente visando crescimento de vendas.",
      "Estratégias eficientes e pensadas sob medida para seus canais, produtos/serviços, nicho de mercado, modelo ideal de funil, e mais.",
    ],
    textButton: "quero gerar mais demanda",
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
        percentage: "91%",
        text:
          "das empresas brasileiras estão ainda em estágios iniciais do marketing digital.",
      },
      {
        percentage: "20%",
        text:
          "das empresas testam e criam novos produtos e jornadas em conjunto com seus clientes.",
      },
      {
        percentage: "3%",
        text: "de empresas usam estrategicamente dados e tecnologia no Brasil.",
      },
      {
        percentage: "4%",
        text:
          "das empresas conseguem ter visão granular de todo o funil de conversão, com estratégias de palavra-chave e KPIs distintos.",
      },
    ],
    colorTextContentPercentage: "red",
    textPrimary: "Big numbers, big problems",
    textSub: "O atual cenário de Marketing Digital no Brasil",
    colorTextSub: "lightGray",
    textButton: "quero amadurecer meu negócio",
    colorTextPrimary: "black",
    colorTextButton: "light",
    colorBackgroundButton: "red",
    hoverColorButton: "lightRed",
    squareButton: false,
  }

  const tileBlocks = [
    { name: "ABM", link: "/abm" },
    { name: "Consulting", link: "/consulting" },
    { name: "Martech", link: "/martech" },
    { name: "Business Intelligence", link: "/data-intelligence/" },
  ]

  // const transformedBrands = [
  //   { href: "https://www.lenovo.com/", img: LenovoBg },
  //   { href: "https://algartelecom.com.br/", img: AlgarTelecom },
  //   { href: "https://www.ultragaz.com.br/", img: Ultragas },
  // ]

  const tileBlocksImgHelpers = [
    { href: "https://www.lenovo.com/BR/pt/", img: LenovoBg },
    { href: "https://unico.io/", img: UnicoLogo },
    { href: "https://zoop.com.br/", img: ZoopLogo },
    { href: "https://www.equals.com.br/", img: EqualsLogo },
    { href: "https://www.trendmicro.com/", img: TrendMicro },
    { href: "https://www.brq.com/", img: BRQ },
    { href: "https://www.adobe.com/", img: AdobeLogo },
  ]

  const methodology = [
    {
      number: "01",
      title: "Estratégia",
      topics: [
        "Imergimos no negócio.",
        "Estudamos os ativos da empresa (de clientes a stakeholders).",
        "Definimos o ICP (Perfil de Cliente Ideal).",
        "Definimos personas e cluster.",
        "Definimos indicadores de sucesso.",
        "Aplicamos a Matriz de Necessidades.",
      ],
    },
    {
      number: "02",
      title: "Planejamento",
      topics: [
        "Analisamos dados históricos da geração de demanda.",
        "Mapeamos os canais de geração de demanda ativos e receptivos.",
        "Planejamos a comunicação e criamos nuvens de conteúdo.",
        "Definimos a dor certa para solucionarmos de acordo com o nível de maturidade do mercado.",
        "Estruturamos a estratégia de canais de prospecção ativa e o funil de vendas.",
      ],
    },
    {
      number: "03",
      title: "Qualificação",
      topics: [
        "Mapeamos as taxas de conversão entre etapas do funil.",
        "Criamos um modelo de lead scoring.",
        "Mapeamos a jornada do cliente.",
        "Planejamos de réguas/fluxos de automação por objetivo.",
        "Definimos o canal ideal para geração de leads.",
      ],
    },
    {
      number: "04",
      title: "Criação e gestão de ativos",
      topics: [
        "Analisamos e jornadas nos canais digitais.",
        "Otimizamos de canais digitais e website (conteúdo, UX e SEO).",
        "Criamos ativos de conversão de acordo as personas.",
      ],
    },
    {
      number: "05",
      title: "Integração",
      topics: [
        "Validamos e alinhamos a estratégia junto ao time de vendas.",
        "Integramos entre os setores de marketing e vendas.",
        "Criamos funil em Y.",
        "Geramos recorrência de demanda.",
      ],
    },
    {
      number: "06",
      title: "Pay & Flow",
      topics: [
        "Implementamos dos novos processos e ferramentas.",
        "Fazemos workshop de imersão com o time.",
        "Acompanhamos de métricas do funil de vendas.",
        "Acompanhamos a performance de métricas e indicadores.",
      ],
    },
  ]

  return (
    <>
      <Header {...headerProps} />
      <Layout>
        <StyleContainerAlgarBorder>
          <div id="algarGreen">
            <StyleContainerAlgar backgroundColor="green" className="py-5">
              <Container className="d-flex flex-row">
                <Spacing p="6rem 0">
                  <StyleContainerAlgarSides className="d-flex flex-row-reverse">
                    <div className="box-content">
                      <StyleContainerAlgarLogo src={Algar} />
                      <div className="percentage d-flex mt-5 flex-row">
                        <StyleContainerAlgarPercentage className="mr-3">
                          20%
                        </StyleContainerAlgarPercentage>
                        <div
                          className="d-flex align-items-end"
                          style={{ marginBottom: "0.9rem" }}
                        >
                          de aumento de <br />
                          vendas B2B
                        </div>
                      </div>
                      <StyledContainerAlgarText className="mt-4">
                        Geração de demanda para soluções complexas através de
                        criação e gestão de conteúdos voltados exclusivamente
                        para o ICP.
                      </StyledContainerAlgarText>
                      <Typography type="h5" color="black">
                        <StyledContainerAlgarHeadline className="mt-4">
                          Descubra como alcançamos esse resultado
                        </StyledContainerAlgarHeadline>
                      </Typography>
                      <div className="form">
                        <ButtonSimple
                          buttonClick={() => scrollTo("#contact")}
                          className="mt-4"
                          text="Quero aumentar vendas B2B"
                          bgColor="black"
                          textColor="light"
                        />
                      </div>
                    </div>
                    <div className="side w-50">
                      <StyleContainerAlgarImage src={Notebook} />
                    </div>
                  </StyleContainerAlgarSides>
                </Spacing>
              </Container>
            </StyleContainerAlgar>
          </div>
        </StyleContainerAlgarBorder>

        <section className="d-none d-md-flex pb-5 mr-4 pb-xl-5 pb-lg-5 pb-5 mr-4 mr-sm-4 mr-md-4 mr-lg-4 mr-xl-5 pr-sm-4 pr-md-4 pr-lg-4 pr-xl-5">
          <section
            style={{ padding: "6rem" }}
            className="d-flex justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between align-items-center align-items-lg-center align-items-xl-center flex-column flex-lg-row flex-xl-row"
          >
            <Col className="col-12 col-md-12 col-lg-6 col-xl-6 mb-sm-5 mb-md-5 px-0 mt-md-5 pt-5 d-flex align-items-center">
              <InfoPercentage
                infoButton={() => scrollTo("#contact")}
                {...infoPercentageData}
              />
            </Col>
            <Col className="col-12 col-md-12 col-lg-5 col-xl-5 mb-sm-5 mb-md-5 p-0 d-flex justify-content-center align-items-center">
              <StyledFloatingImg>
                <StyledMap src={MapImg}></StyledMap>
              </StyledFloatingImg>
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
            title="Estratégia, metodologia e tecnologia"
            subtitle="para atrair e converter leads qualificados de forma recorrente"
            data={methodology}
          />
        </section>
        <section className="d-lg-none my-5 px-4 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 px-sm-5 px-md-5 px-lg-5 px-xl-5">
          <VerticalTabSwitcherMobile
            backgroundColor="light"
            color="black"
            menuItemColor="red"
            title="Estratégia, metodologia e tecnologia"
            subtitle="para atrair e converter leads qualificados de forma recorrente"
            data={methodology}
          />
        </section>

        <section className="d-flex justify-content-center align-items-center">
          <Col className="col-12 col-md-7 col-lg-8 col-xl-7">
            <InfoTitle
              buttonClick={() => scrollTo("#contact")}
              colorTextButton="light"
              textCenter={true}
              textPrimary="Você sabia que é possível"
              textSpotlight="gerar demanda qualificada de forma recorrente"
              colorTextSpotlight="red"
              colorTextPrimary="black"
              colorTextContent="lightGray"
              colorBackgroundButton="red"
              hoverColorButton="lightRed"
              cursor={true}
              textContent="Realize upgrades e atualizações constantes com as melhores práticas do mercado em geração de demanda e inside sales, estando sempre apto para a próxima evolução."
              textButton="quero evoluir meu negócio"
              MobileLeftText={true}
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
                      defaultNamePage="Geração de Demanda"
                      defaultUtmSource="site"
                      defaultUtmMedium="demand-generation"
                      defaultUtmCampaign="bw_site"
                      defaultUtmContent=" "
                      formTitle={[
                        {
                          color: "black",
                          text:
                            "Falta pouco para multiplicar suas oportunidades",
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
            title="não se limite a apenas uma solução, conheça todas as nossas expertises:"
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
  DemandGenerationPage,
  "red",
  "Bowe | Demand Generation",
  "https://www.bowe.com.br/demand-generation/"
)
