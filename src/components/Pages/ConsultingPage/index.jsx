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
  Spacing,
} from "../../index"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Col, Row } from "react-bootstrap"
import { StyleHorseContainer, StyledMap } from "./styled"

import TroiaHorse from "../../../assets/img/troiaRed.svg"
import Fish from "../../../assets/img/fish.svg"
import MapImg from "../../../assets/img/map.svg"

import LenovoBg from "../../../assets/img/lenovoBg.png"
import BRQ from "../../../assets/img/logos/brq.webp"
import ZoopLogo from "../../../assets/img/logos/zoop.png"
import TrendMicro from "../../../assets/img/logos/trendmicro.png"
import AdobeLogo from "../../../assets/img/logos/adobe.png"
import SemantixLogo from "../../../assets/img/logos/semantix.png"
import SAPLogo from "../../../assets/img/logos/sap.png"

import "./consultingPage.css"

const ConsultingPage = () => {
  const headerProps = {
    title: "CONSULTING",
    textPrimary: "Comece a pensar o B2B mais ",
    writeMachine: "consulting",
    textContent: [
      "Soluções personalizadas para as necessidades do seu time comercial B2B",
      "Te ajudamos a associar tecnologia à estratégias de marketing e vendas de forma a escalar seus resultados e aumentar a maturidade do seu negócio.",
    ],
    textButton: "quero melhorar resultados",
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
        percentage: "80%",
        text:
          "das empresas B2B brasileiras já contam com estratégias de marketing digital.",
      },
      {
        percentage: "85%",
        text:
          "delas pretendem aumentar a quantidade de conteúdo de marketing em 2020.",
      },
      {
        percentage: "94%",
        text:
          "utilizam redes sociais como principal canal para geração de conteúdo.",
      },
      {
        percentage: "72%",
        text: "direcionam seus esforços de marketing para aumentar as vendas.",
      },
      {
        percentage: "66%",
        text:
          "já destinam parte da verba de marketing para canais de mídias pagas.",
      },
    ],
    colorTextContentPercentage: "red",
    textPrimary: "Big numbers, big problems",
    textSub:
      "O atual cenário de concorrência digital para empresas B2B no Brasil",
    colorTextSub: "lightGray",
    textButton: "quero ver meu negócio crescer",
    colorTextPrimary: "black",
    colorTextButton: "light",
    colorBackgroundButton: "red",
    infoButton: () => scrollTo("#contact"),
    hoverColorButton: "ligthRed",
    squareButton: false,
  }

  const tileBlocks = [
    { name: "Demand Generation B2B", link: "/demand-generation" },
    { name: "ABM", link: "/abm" },
    { name: "Martech", link: "/martech" },
    { name: "Business Intelligence", link: "/data-intelligence" },
  ]

  // const transformedBrands = [
  //   { href: "https://www.lenovo.com/", img: LenovoBg },
  //   { href: "https://algartelecom.com.br/", img: AlgarTelecom },
  //   { href: "https://www.ultragaz.com.br/", img: Ultragas },
  // ]

  const tileBlocksImgHelpers = [
    { href: "https://www.lenovo.com/BR/pt/", img: LenovoBg },
    { href: "https://www.semantix.ai/", img: SemantixLogo },
    { href: "https://zoop.com.br/", img: ZoopLogo },
    { href: "https://www.sap.com/brazil/index.html", img: SAPLogo },
    { href: "https://www.trendmicro.com/", img: TrendMicro },
    { href: "https://www.brq.com/", img: BRQ },
    { href: "https://www.adobe.com/", img: AdobeLogo },
  ]

  const methodology = [
    {
      number: "01",
      title: "Análise e Diagnóstico",
      topics: [
        "Entendemos seu mercado e as necessidades únicas da sua empresa.",
        "Destrinchamos as operações de marketing e vendas.",
        "Mapeamos processos sob medida para solucionar dores.",
      ],
    },
    {
      number: "02",
      title: "Estratégia",
      topics: [
        "Definimos ICP.",
        "Definimos indicadores de sucesso.",
        "Criamos metas de vendas coerentes.",
        "Aplicamos a Matriz de Necessidades.",
        "Aplicamos a Matriz de Objeções.",
      ],
    },
    {
      number: "03",
      title: "Geração de demanda qualificada",
      topics: [
        "Estruturamos estratégias de geração de demanda ativa e receptiva por canais.",
        "Mapeamos a jornada do cliente.",
        "Criamos um modelo de lead scoring.",
        "Definimos a dor certa para atacarmos de acordo com o nível de maturidade do mercado.",
        "Estruturamos a estratégia de canais de prospecção ativa e o funil de vendas.",
      ],
    },
    {
      number: "04",
      title: "Gestão de ativos de vendas",
      topics: [
        "Desenhamos um funil em ampulheta baseado em metas e indicadores.",
        "Definimos speech personalizado para cada vendedor (esqueça os scripts de vendas).",
        "Definimos fluxos de cadência de acordo com etapas de prospecção e funil.",
        "Criamos um Playbook de Vendas personalizado de acordo com skills e metas do time.",
      ],
    },
    {
      number: "05",
      title: "Tecnologia e Pessoas",
      topics: [
        "Analisamos as necessidades tecnológicas.",
        "Criamos um de stack de ferramentas sob medida.",
        "Configuramos e integramos as plataformas plataformas.",
        "Traçamos perfil e plano de desenvolvimento individual para os times.",
        "Identificamos gaps e necessidade de aquisição de membros com skills específicas.",
      ],
    },
    {
      number: "06",
      title: "Pay & Flow",
      topics: [
        "Implementamos dos novos processos e ferramentas.",
        "Fazemos workshop de imersão com o time.",
        "Acompanhamos de métricas do funil de vendas.",
        "Acompanhamos os indicadores de sucesso.",
      ],
    },
  ]

  return (
    <>
      <Header {...headerProps} />
      <Layout>
        <section className="d-none d-md-flex pb-5 mr-4 pb-xl-5 pb-lg-5 pb-5 mr-4 mr-sm-4 mr-md-4 mr-lg-4 mr-xl-5 pr-sm-4 pr-md-4 pr-lg-4 pr-xl-5">
          <section className="d-flex justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between align-items-center align-items-lg-center align-items-xl-center flex-column flex-md-row flex-lg-row flex-xl-row">
            <Col className="col-12 col-md-5 col-lg-5 col-xl-5 mb-sm-5 mb-md-5 p-0 d-flex justify-content-center align-items-center">
              <StyledMap src={MapImg}></StyledMap>
            </Col>
            <Col className="col-12 col-md-6 col-lg-6 col-xl-6 mb-sm-5 mb-md-5 px-0 mt-md-5 pt-5 d-flex align-items-center">
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

        {/* <section className="d-flex py-5 justify-content-center align-items-center">
          <Col className="col-8 col-sm-5 col-md-10 col-lg-12 col-xl-12 p-0 d-flex flex-column justify-content-center align-items-center text-center">
            <TileBlocksImg
              title="Marcas que já foram Transformadas"
              list={transformedBrands}
              imagesCenter={true}
            />
          </Col>
        </section> */}

        <br />

        <Spacing p="0">
          <section className="d-flex bg-theme-red py-5 justify-content-center align-items-center">
            <Col className="col-12 col-md-6 col-lg-4 col-xl-4 py-5">
              <InfoTitle
                buttonClick={() => scrollTo("#contact")}
                colorTextButton="red"
                colorBackgroundButton="light"
                hoverColorButton="ice"
                reverse={true}
                textCenter={true}
                textSpotlight="Como se destacar nesse oceano vermelho?"
                textContent="Sua empresa está competindo com concorrentes diretos, indiretos e algoritmos."
                textButton="quero escalar meu negócio"
              />
            </Col>
          </section>
        </Spacing>
        <section className="d-none d-lg-block my-2">
          <VerticalTabSwitcher
            colorTitle="black"
            colorSubTitle="black"
            backgroundColor="light"
            color="darkBlue"
            menuItemColor="red"
            title="Resultados sob medida"
            subtitle="soluções feitas para as dores únicas da sua empresa e segmento de mercado"
            data={methodology}
          />
        </section>
        <section className="d-lg-none my-5 px-4 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 px-sm-5 px-md-5 px-lg-5 px-xl-5">
          <VerticalTabSwitcherMobile
            backgroundColor="light"
            color="darkBlue"
            colorTitle="black"
            colorSubTitle="black"
            menuItemColor="red"
            title="Resultados sob medida"
            subtitle="soluções feitas para as dores únicas da sua empresa e segmento de mercado"
            data={methodology}
            alignMobile={true}
          />
        </section>
        <section className="d-flex justify-content-center align-items-center single-text">
          <InfoTitle
            buttonClick={() => scrollTo("#contact")}
            colorTextButton="light"
            textCenter={true}
            textPrimary="Você sabia que é possível "
            textSpotlight="converter mais clientes dentro do ICP"
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
        </section>

        <div id="contact">
          <StyleHorseContainer troiaHorse={TroiaHorse}>
            <Row className="my-mb-5 my-lg-5 my-xl-5 mx-3 px-0 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-4 px-xl-4">
              <div className="mb-5">
                <Row>
                  <Col className="col-12 px-4 px-sm-5 px-md-5">
                    <ContactForm
                      defaultNamePage="Consulting"
                      defaultUtmSource="site"
                      defaultUtmMedium="consulting"
                      defaultUtmCampaign="bw_site"
                      defaultUtmContent=" "
                      formTitle={[
                        {
                          color: "black",
                          text: "Você está a um passo de vencer o",
                        },
                        { color: "red", text: "oceano vermelho" },
                      ]}
                      formTitleSpotlight="oceano vermelho"
                      color="red"
                      textColor="light"
                      formSubTitle="Fale com nossos especialistas e descubra como."
                      colorHover="lightRed"
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
  ConsultingPage,
  "red",
  "Bowe | Consulting",
  "https://www.bowe.com.br/consulting/"
)
