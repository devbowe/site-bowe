import React, { useState } from "react"
import pageWraper from "../../../components/default/pageWrapper"
import {
  MenuNav,
  Footer,
  Spacing,
  Typography,
  Button,
  Hover,
  Video,
  ContactForm,
  TileBlocksImg,
} from "../../../components/index"
import * as S from "./styled"
import { Col, Row } from "react-bootstrap"
import { BannerContainer, Section, Flex, FlexReverse } from "../styled"
import scrollTo from "gatsby-plugin-smoothscroll"
import LenovoBg from "../../../assets/img/lenovoBg.png"
import SemantixLogo from "../../../assets/img/logos/semantix.png"
import SAPLogo from "../../../assets/img/logos/sap.png"
import ZoopLogo from "../../../assets/img/logos/zoop.png"
import TrendMicro from "../../../assets/img/logos/trendmicro.png"
import AdobeLogo from "../../../assets/img/logos/adobe.png"
import BRQ from "../../../assets/img/logos/brq.webp"
import Martech from "../../../assets/img/martechBoweIcon.svg"
import Triangle from "../../../assets/img/triangle.svg"
import TroiaHorse from "../../../assets/img/troiaRed.svg"
import "./homePage.css"

const HomePage = () => {
  const [optionMapState, setOptionMapState] = useState(0)
  const buttonsOptionMap = [
    [
      {
        text: "Marketing e vendas B2B",
        click: () => setOptionMapState(1),
      },
      {
        text: "Estratégia de Marketing",
        click: () => setOptionMapState(2),
      },
      {
        text: "Digital Marketing",
        click: () => setOptionMapState(3),
      },
      {
        text: "Sales Ops",
        click: () => setOptionMapState(4),
      },
      {
        text: "Martech",
        click: () => setOptionMapState(5),
      },
      // {
      //   text: "Mobile App",
      //   click: () => setOptionMapState(6),
      // },
      {
        text: "Service Design",
        click: () => setOptionMapState(8),
      },
      {
        text: "Business Intelligence",
        click: () => setOptionMapState(9),
      },
    ],
    [
      {
        text: "ABM",
        link: "/abm/",
      },
      {
        text: "Inbound",
        link: "/demand-generation",
      },
      {
        text: "Marketing de conteúdo",
        link: "/demand-generation",
      },
      {
        text: "Outbound",
        link: "/demand-generation",
      },
      {
        text: "Inside Sales",
        link: "/consulting",
      },
      {
        text: "Social Selling",
        link: "/demand-generation",
      },
      {
        text: "Integração marketing & vendas",
        link: "/martech",
      },
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
    [
      {
        text: "Funil de marketing e vendas",
        link: "/martech",
      },
      {
        text: "Integração Marketing & vendas",
        link: "/martech",
      },
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
    [
      {
        text: "Inbound",
        link: "/demand-generation",
      },
      {
        text: "Social Selling",
        link: "/demand-generation",
      },
      {
        text: "Funil integrado",
        link: "/martech",
      },
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
    [
      {
        text: "Inside Sales",
        link: "/consulting",
      },
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
    [
      {
        text: "Automação de marketing",
        link: "/martech",
      },
      {
        text: "Integração marketing & vendas",
        link: "/martech",
      },
      {
        text: 'Funil integrado em "Y"',
        link: "/martech",
      },
      {
        text: "Sales Engagement",
        link: "/martech",
      },
      {
        text: "CRM",
        link: "/martech",
      },
      {
        text: "Business Intelligence",
        link: "/data-intelligence",
      },
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
    [
      {
        text: "App Development",
        link: "/builder",
      },
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
    [
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
    [
      {
        text: "Data Science",
        link: "/data-intelligence",
      },
      {
        text: "Business Intelligence",
        link: "/data-intelligence",
      },
      {
        text: "Date Lake",
        link: "/data-intelligence",
      },
      {
        text: "ETL",
        link: "/data-intelligence",
      },
      {
        text: "voltar",
        underline: true,
        click: () => setOptionMapState(0),
      },
    ],
  ]

  const martechESalesButtons = [
    {
      text: "Consulting",
      link: "/consulting",
    },
    {
      text: "Demand Generation",
      link: "/demand-generation",
    },
    {
      text: "Sales Ops",
      link: "/consulting",
    },
    {
      text: "Martech",
      link: "/martech",
    },
    {
      text: "ABM",
      link: "/abm/",
    },
  ]

  const tileBlocksImgHelpers = [
    { href: "https://www.lenovo.com/BR/pt/", img: LenovoBg },
    { href: "https://www.semantix.ai/", img: SemantixLogo },
    { href: "https://zoop.com.br/", img: ZoopLogo },
    { href: "https://www.sap.com/brazil/index.html", img: SAPLogo },
    { href: "https://www.trendmicro.com/", img: TrendMicro },
    { href: "https://www.brq.com/", img: BRQ },
    { href: "https://www.adobe.com/", img: AdobeLogo },
  ]

  return (
    <>
      <BannerContainer className="banner" bgColor="darkBlue" bannerImg>
        <S.SpacingMenuNav>
          <MenuNav classMenuNav="bd-nav-dark" />
        </S.SpacingMenuNav>
        <Spacing p="6rem">
          <Flex fastMobile>
            <S.ContextBanner>
              <Typography type="h2" color="primary" width="50%">
                Somos uma empresa de Martech e Geração de Demanda B2B.
                Entregamos soluções para evolução digital com foco no
                crescimento de negócios.
              </Typography>
              <Typography
                type="body"
                color="primary"
                mt="20px"
                mb="20px"
                width="80%"
              >
                Nosso time une metodologias, ferramentas, canais e dados com
                foco obsessivo por resultados e solução de problemas.
              </Typography>
              <Button
                borderColor="lightRed"
                bgColor="lightRed"
                hoverColor="red"
                textColor="primary"
                text="o que fazemos"
                cursor="false"
                click={() => scrollTo("#work")}
              />
            </S.ContextBanner>
            <div>
              <Video />
            </div>
          </Flex>
        </Spacing>
      </BannerContainer>

      <Section id="work">
        <FlexReverse>
          <S.SessionVideo>
            <Video control={false} video="intersection" />
          </S.SessionVideo>
          <S.Box>
            <S.ContextBox>
              <Typography type="h1" color="secondary" spanColor="third">
                Qual é sua <span>necessidade</span> de negócio?
              </Typography>
              <Typography type="h6" color="secondary" mt="20px" mb="40px">
                Responda duas perguntas para ajudarmos a filtrar o melhor
                conteúdo para você
              </Typography>
            </S.ContextBox>
            <S.BoxButtons>
              {buttonsOptionMap[optionMapState].map((option, index) => {
                return (
                  <Button
                    key={index}
                    {...option}
                    borderColor="secondary"
                    textHoverColor="primary"
                    hoverColor="brandDarkBlue"
                  />
                )
              })}
            </S.BoxButtons>
          </S.Box>
        </FlexReverse>
      </Section>

      <Section id="soluctions">
        <S.FlexCenter>
          <Typography type="h2" color="secondary" spanColor="third">
            Soluções para transformação e evolução digital de negócios com foco
            em crescimento.
          </Typography>
          <Typography type="h6" color="secondary" mt="20px" mb="40px">
            Da inteligência à mão na massa, do BP às dashboards, com foco total
            em aumentar o crescimento e lucratividade de empresas e
            transformá-las em líderes no mundo digital.
          </Typography>
          <Button
            textColor="primary"
            bgColor="lightRed"
            borderColor="lightRed"
            text="conheça nossas soluções de negócio"
            hoverColor="red"
            click={() => scrollTo("#martech")}
          />
        </S.FlexCenter>
      </Section>

      <Section bgColor="red" id="martech">
        <Spacing p="6rem 2rem">
          <Flex>
            <S.BoxSession3>
              <S.ContextBox>
                <img src={Martech} />
                <Typography type="h6" context mt="20px" mb="40px" color="light">
                  Aplicamos a tecnologia junto a estratégias de Marketing e
                  Vendas para levar nossos clientes além, gerando demanda
                  qualificada, maior previsibilidade de vendas, autoridade no
                  mercado e resultados reais.
                </Typography>
                <Typography type="spacing" mt="20px" mb="10px" color="light">
                  CONHEÇA NOSSAS SOLUÇÕES
                </Typography>
              </S.ContextBox>
              <S.Session3button>
                {martechESalesButtons.map((option, index) => {
                  return (
                    <Button
                      key={index}
                      textColor="primary"
                      textHoverColor="third"
                      bgColor="transparent"
                      borderColor="light"
                      hoverColor="light"
                      {...option}
                    />
                  )
                })}
              </S.Session3button>
            </S.BoxSession3>
            <S.SessionVideo>
              <Video control={false} video="martech" />
            </S.SessionVideo>
          </Flex>
        </Spacing>
      </Section>

      {/* <Section bgColor="lightGray" className="menSection">
        <Spacing p="6rem 2rem">
          <FlexReverse className="menTextBox">
          <S.ImgMen>
            <img src={Men} />
          </S.ImgMen>
            <S.BoxSession3>
              <S.ContextBox>
                <img src={ColabVentures} />
                <Typography type="h6" context mt="20px" mb="40px" color="light">
                  Uma frente de cocriação e tração de soluções digitais e
                  inovadoras onde juntamos nossas especialidades em Marketing,
                  Vendas, Tecnologia e Negócios para criar produtos inéditos que
                  geram transformação no mercado.
                </Typography>
              </S.ContextBox>
              <S.Session2button>
                <Button
                  textColor="secondary"
                  bgColor="light"
                  borderColor="light"
                  text="em breve"
                  click={() => scrollTo("#contact")}
                  cursor={true}
                />
              </S.Session2button>
            </S.BoxSession3>
          </FlexReverse>
        </Spacing>
      </Section>

      <Section bgColor="brandGreen">
        <Spacing p="6rem 2rem">
          <Flex>
            <S.BoxSession3>
              <S.ContextBox>
                <img src={AcademyLogoImg} />
                <Typography type="h6" context mt="20px" mb="40px" color="light">
                  Acreditamos que o conhecimento deve ser compartilhado. A Bowe
                  Academy é o nosso programa de capacitação, um espaço aberto
                  para profissionais e empresas que desejam aprender com quem
                  faz e vive a transformação digital.
                </Typography>
              </S.ContextBox>
              <S.Session3button>
                <Button
                  textColor="secondary"
                  bgColor="light"
                  borderColor="light"
                  text="Em breve"
                  click={() => scrollTo("#contact")}
                  cursor={true}
                />
              </S.Session3button>
            </S.BoxSession3>
            <S.SessionVideo>
              <Video control={false} video="academy" />
            </S.SessionVideo>
          </Flex>
        </Spacing>
      </Section> */}

      <Section>
        <Hover />
      </Section>

      <Section>
        <FlexReverse>
          <S.TriangleImg>
            <img src={Triangle} />
          </S.TriangleImg>

          <S.BoxText>
            <Typography type="h1" spanColor="third" color="secondary" mb="20px">
              O jeito <span>Bowe</span>
              <br /> de fazer as coisas
            </Typography>
            <Typography type="body" color="secondary" mb="40px" opacity="70%">
              Metodologia, agilidade, simplicidade e profundidade em negócios
              são diferenciais da nossa entrega. Nossos valores são diferenciais
              do nosso time. Esse é o nosso jeito de ser.
            </Typography>
            <Row>
              <Col>
                <S.PrimaryButton fade to="/carreiras/cultura/">
                  explorar nossa cultura
                </S.PrimaryButton>
              </Col>
            </Row>
          </S.BoxText>
        </FlexReverse>
      </Section>

      <div id="contact">
        <S.StyleHorseContainer troiaHorse={TroiaHorse}>
          <Row
            className="my-mb-5 my-lg-5 my-xl-5 mx-3 px-0 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-4 px-xl-4"
            id="contact"
          >
            <Row>
              <Col className="col-12 px-4 px-sm-5 px-md-5">
                <ContactForm
                  defaultNamePage="Home"
                  defaultUtmSource="site"
                  defaultUtmMedium="home"
                  defaultUtmCampaign="bw_site"
                  defaultUtmContent=" "
                  formTitle={[
                    {
                      color: "black",
                      text: "Entenda hoje como podemos fazer sua empresa",
                    },
                  ]}
                  span=" inovar"
                  color="red"
                  textColor="light"
                  colorHover="darkBlue"
                  textButton="solicitar contato"
                />
              </Col>
            </Row>
          </Row>
        </S.StyleHorseContainer>
      </div>

      <section className="my-5 px-4 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 px-sm-5 px-md-5 px-lg-5 px-xl-5 ">
        <TileBlocksImg
          title="Sempre gratos às empresas que cocriaram com a gente"
          list={tileBlocksImgHelpers}
        />
      </section>
      <Footer />
    </>
  )
}
export default pageWraper(HomePage, "light", "Bowe", "https://www.bowe.com.br/")
