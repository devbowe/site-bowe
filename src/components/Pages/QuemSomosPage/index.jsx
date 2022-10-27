import React from "react"
import { Col, Row } from "react-bootstrap"
import pageWraper from "../../default/pageWrapper"
import {
  Footer,
  Header,
  Layout,
  TeamCard,
  InfoTitle,
  TileBlocksImg,
  Slide,
  Spacing,
  History,
} from "../../index"
import * as S from "./styled"
import Martech from "../../../assets/img/martechBoweIcon.svg"
import ColabVentures from "../../../assets/img/colabVenturesBoweIcon.svg"
import MobileTech from "../../../assets/img/mobileTechBoweIcon.svg"
import imgAcademy from "../../../assets/img/imgCardAcademy.png"
import ImgColab from "../../../assets/img/cardColabVentures.svg"
import Brain from "../../../assets/img/brain.svg"
import Tech from "../../../assets/img/tech.svg"
import ImgBowe from "../../../assets/img/img-bowe.svg"
import LogoImgAcademy from "../../../assets/img/academyBoweIcon.svg"
import LenovoBg from "../../../assets/img/lenovoBg.png"
import ZoopLogo from "../../../assets/img/logos/zoop.png"
import TrendMicro from "../../../assets/img/logos/trendmicro.png"
import AdobeLogo from "../../../assets/img/logos/adobe.png"
import BRQ from "../../../assets/img/logos/brq.webp"
import SemantixLogo from "../../../assets/img/logos/semantix.png"
import SAPLogo from "../../../assets/img/logos/sap.png"

import ContactForm from "../../ContactForm"
import TroiaHorse from "../../../assets/img/troiaRed.svg"
import { StyleHorseContainer } from "../DemandGenerationPage/styled"

const QuemSomosPage = () => {
  const headerProps = {
    textPrimary: "Quem Somos",
    textContent: [
      "Especialistas em gerar transformação. Trabalhamos com a tração e cocriação de negócios digitais. Somos o pacote completo: marketing, vendas, tecnologia e analytics.",
    ],
    writeMachine: null,
    textButton: "conheça nossas soluções",
    linkTo: "/",
    colorTextTitle: "light",
    colorTextSpotlight: "light",
    colorTextPrimary: "light",
    colorTextContent: "light",
    colorTextButton: "light",
    colorBackgroundButton: "red",
    hoverColorButton: "red",
    squareButton: false,
    theme: "dark",
  }

  const culture = {
    textPrimary: "Nossa cultura",
    textContent: [
      `Sabemos que, para atingir os resultados que tanto almejamos, precisamos de pessoas, por isso investimos em nossa cultura. Nossos times são convidados a colaborar entre si e não se acomodarem. Somos inconformados por natureza e levamos a sério os pilares da nossa cultura:`,
    ],
    textButton: "confira nossa página de carreiras",
    linkTo: "/carreiras",
    colorTextSpotlight: "light",
    colorTextPrimary: "light",
    colorTextContent: "light",
    colorTextButton: "light",
    colorBackgroundButton: "red",
    hoverColorButton: "lightRed",
    squareButton: false,
  }

  const cards = [
    {
      text:
        "A frente de Marketing e Vendas trabalha gerando demanda qualificada para empresas B2B, aumentando a previsibilidade de vendas e maturidade digital.",
      icon: Martech,
      color: "red",
      img: Brain,
      alt: "Bowe - Martech & Sales",
      id: "martech",
    },
    {
      text:
        "No Mobile & Tech criamos e desenvolvemos soluções tecnológicas para negócios em busca de inovação.",
      icon: MobileTech,
      color: "blue",
      img: Tech,
      alt: "Bowe - Mobile & Tech",
      id: "mobile",
    },
    {
      text:
        "Na frente Colab Ventures, juntamos todas as nossas habilidades para criar produtos inéditos em parceria com investidores que estão em busca de revolucionar o mercado.",
      icon: ColabVentures,
      color: "lightGray",
      img: ImgColab,
      alt: "Bowe - Colab Ventures",
      id: "colab",
    },
    {
      text:
        "Acreditamos que o conhecimento deve ser compartilhado. A Bowe Academy é o nosso programa de capacitação, um espaço aberto para profissionais e empresas que desejam aprender com quem faz e vive a transformação digital.",
      icon: LogoImgAcademy,
      color: "brandGreen",
      img: imgAcademy,
      alt: "Bowe - Academy",
      id: "academy",
    },
  ]

  const slides = [
    {
      title: "We are",
      subtitle: "Problem Solvers",
      text:
        "Não pare enquanto não achar a melhor solução. Pensamento simples e foco nas #QuickWins.",
    },
    {
      title: "Be a",
      subtitle: "Partner",
      text:
        "Trabalho em equipe e sentimento de dono. Saber usar a autonomia e liberdade concedidas. E buscar excelência em tudo que fizer.",
    },
    {
      title: "Be Honest",
      subtitle: "and be Yourself",
      text:
        "Ser você mesmo e liberar seu potencial. Nada de justificativas. Pedir ajuda quando preciso. Questionar e errar é permitido.",
    },
    {
      title: "Find the",
      subtitle: "Data",
      text:
        "Basear decisões em dados. Ser crítico e analítico. Não aceitamos achismos.",
    },
    {
      title: "We are",
      subtitle: "Always Beta",
      text:
        "Seja inconformado. Não pare de aprender e desaprender. Evolução constante. #LifelongLearning.",
    },
  ]

  const methodology = [
    {
      year: "2013",
      title: "O inconformismo que fez tudo começar",
      img: ImgBowe,
      topics: [
        "- Não muito satisfeito com as empresas tradicionais onde passou, nosso founder Kelmer Teixeira buscava por um ambiente apto a mudanças constantes e crescimento acelerado. Para atingir esse propósito, aos 21 anos, começou a empreender. Inicialmente, com o objetivo de entregar valor para empresas por meio da comunicação e de soluções gráficas.",
      ],
    },
    {
      year: "2014",
      title: "Primeiros pequenos voos - Maori Propaganda",
      img: ImgBowe,
      topics: [
        "- Depois de um ano trabalhando sozinho e de home office desenvolvendo comunicação para pequenas marcas e terceirizando produção gráfica, Kelmer convidou um amigo de faculdade para iniciar a sua primeira agência de comunicação, a Maori, que atendeu pequenas e média empresas locais com serviços de criação/design e veiculação/produção de mídia offline.",
      ],
    },
    {
      year: "2016",
      title: 'Primeira transformação: precisamos ser “digital"',
      img: ImgBowe,
      topics: [
        "- Em 2016 o marketing digital já era visto como o futuro do marketing. Kelmer buscou uma pessoa com expertise para compartilhar os objetivos, com isso se uniu ao Raphael Rosa e, juntos, com visão inovadora e o mesmo nível de inconformismo, fizeram nascer a Bowe.",
      ],
    },
    {
      year: "2017",
      title: "Nasce a Bowe - “360 na veia”",
      img: ImgBowe,
      topics: [
        "- Da junção de duas pequenas agências, uma analógica e outra digital, nasce a Bowe. Uma proposta um tanto quanto inovadora para o mercado local, seguindo o conceito de que não existia barreiras entre o “on” e o “off” e o caminho estava em “ser 360º”.",
        "- O resultado dessa união não podia ter sido diferente. A Bowe teve um aumento de 3,5x em seus resultados, em comparação o ano anterior quando ainda eram “Maoris”.",
      ],
    },
    {
      year: "2018",
      title: "Voos um pouco mais altos",
      img: ImgBowe,
      topics: [
        "- Início de 2018, ainda sem nunca terem falado em “planejamento estratégico”, executamos um plano com o propósito de voar ainda mais alto e andar com gente grande.",
        "- Abrimos nossa base comercial em São Paulo, que nos trouxe parceira com grandes empresas como Pagar.me, Stone, Unilever e Lenovo. ",
        "- Estávamos cada vez mais fortes no mundo digital. No final de 2018 com um crescimento acima de 140%, começamos a falar sobre geração de demanda e fizemos dois movimentos:",
        [
          "---> inside sales e funil integrado de marketing e vendas: implementação da área de consultoria em inside sales e integração com as operações de marketing dos nossos clientes.",
        ],
        [
          "---> segmentação de todo o negócio e carteira de clientes para empresas B2B",
        ],
      ],
    },
    {
      year: "2020",
      title: "Vamos crescer #letsgotech",
      img: ImgBowe,
      topics: [
        "- 2020, o ano que a Bowe veio para ser Tech. A pandemia não nos parou e fomos estimulados a acelerar esse movimento. Adquirimos a Ambitus, fábrica de software, com o Caio Rodrigues e o Bruno Benício encabeçando a iniciativa de sermos ainda mais digital.",
        ` - Estamos investindo alto para crescer como nunca visto. Agora falamos de planejamento estratégico e com o propósito de romper barreiras em busca da transformação dos negócios, abrimos novas frentes: BI, processos e customer experience. Tudo isso para nos tornar uma empresa de soluções 360 para digitalização e crescimento de negócios.`,
        ` - Para tornar claro todo esse movimento, também passamos por um rebranding e uma nova forma de nos apresentar ao mundo. Welcome to the new Bowe.`,
      ],
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
      <Header {...headerProps} />
      <S.QuemSomosWrapper>
        <Layout>
          <TeamCard
            classCol="col-12 col-sm-12 col-md-10 mb-md-5 col-lg-6 col-xl-3"
            list={cards}
          />
          <Row className="mx-4 mx-sm-4 mx-md-4 mx-lg-4 mx-xl-5 px-sm-4 px-md-4 px-lg-4 px-xl-5">
            <Spacing p="0">
              <section className="d-flex justify-content-between align-items-start align-items-lg-center align-items-xl-center flex-column flex-lg-row flex-xl-row">
                <Col className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mb-sm-5 mb-md-5 p-0 d-flex align-items-center">
                  <InfoTitle {...culture} />
                </Col>
                <Col className="col-12 col-lg-4 col-xl-4 p-0 d-flex align-items-center">
                  <S.SlideWrapper>
                    <Slide slides={slides} interval={3000} />
                  </S.SlideWrapper>
                </Col>
              </section>
            </Spacing>
          </Row>

          <section className="d-md-block my-5">
            <History
              colorTitle="black"
              colorSubTitle="black"
              backgroundColor="light"
              color="black"
              menuItemColor="red"
              title="História da "
              name="Bowe"
              subtitle="Quem nos viu, quem nos vê"
              data={methodology}
            />

            <div id="contact" style={{ backgroundColor: "#fff" }}>
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
                              color: "white",
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

            <S.Outpartners>
              <TileBlocksImg
                title="Sempre gratos às empresas que cocriaram com a gente"
                list={tileBlocksImgHelpers}
              />
            </S.Outpartners>
          </section>
        </Layout>
      </S.QuemSomosWrapper>
      <Footer />
    </>
  )
}

export default pageWraper(
  QuemSomosPage,
  "darkBlue",
  "Bowe | Quem Somos",
  "https://www.bowe.com.br/quem-somos/"
)
