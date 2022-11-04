import PropTypes from "prop-types"
import React, { useState } from "react"
import CookieConsent from "react-cookie-consent"
import { useForm } from "react-hook-form"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Linkedin from "../../assets/img/linkedin.svg"
import PaperPlane from "../../assets/img/paperPlane.svg"
import Spacing from "../Spacing"
import "./footer.css"
import * as S from "./styled"

const Footer = ({ textButton }) => {
  const { register, handleSubmit, errors } = useForm()
  const [sentStatus, setSendStatus] = useState("")

  const submit = () => {
    setSendStatus("success")
    setTimeout(() => {
      setSendStatus("")
    }, 6000)
  }

  const onSubmit = data => {
    const param = {
      email: data.email,
    }
    submit(param)
  }

  return (
    <>
      <S.FooterContainer>
        <Spacing p="30px 50px">
          <S.AllBoxes>
            <S.Box>
              <S.Title>SOLUÇÕES</S.Title>
              <S.StyledLink fade to="/demand-generation/">
                <S.Text mt="10px">Demand Generation</S.Text>
              </S.StyledLink>
              <S.StyledLink fade to="/abm/">
                <S.Text>ABM</S.Text>
              </S.StyledLink>
              <S.StyledLink fade to="/consulting/">
                <S.Text>Consulting</S.Text>
              </S.StyledLink>
            </S.Box>
            <S.Box>
              <S.Title>BOWE</S.Title>
              <S.StyledLink fade to="/quem-somos">
                <S.Text mt="10px">Sobre nós</S.Text>
              </S.StyledLink>
              <S.StyledLink fade to="/carreiras/nossos-times/">
                <S.Text>Nossos times</S.Text>
              </S.StyledLink>
              <S.StyledLink fade to="/carreiras/cultura/">
                <S.Text>Cultura</S.Text>
              </S.StyledLink>
              <S.StyledLink fade to="/carreiras/carreira/">
                <S.Text>Seja um bower</S.Text>
              </S.StyledLink>
            </S.Box>
            <S.Box>
              <S.Title>LEGAL</S.Title>
              <S.StyledLink fade to="/politicas-de-privacidade">
                <S.Text mt="10px">Política de Privacidade</S.Text>
              </S.StyledLink>
              <S.StyledLink fade to="/termos-uso">
                <S.Text>Termos de Uso</S.Text>
              </S.StyledLink>
            </S.Box>
            <S.Box style={{ maxWidth: "450px" }}>
              <S.TitleForm>
                INSCREVA-SE PARA RECEBER NOSSOS
                <br />
                INSIGHTS DIRETO EM SEU E-MAIL
              </S.TitleForm>
              <S.FormCotainer onSubmit={handleSubmit(onSubmit)}>
                <div className="text-danger mt-2">
                  {errors.name && errors.name.message}
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  ref={register({
                    required: {
                      value: true,
                      message: "Por favor, informe seu email",
                    },
                  })}
                />
                <input
                  type="hidden"
                  name="identificador"
                  ref={register()}
                  value="home-newsletter"
                />
                <button type="submit" text={textButton}>
                  <img src={PaperPlane} />
                </button>
              </S.FormCotainer>
              {sentStatus === "error" && (
                <div className="flex-grow-1">
                  <strong className="text-danger">
                    Ocorreu um erro ao enviar seus dados!
                  </strong>
                </div>
              )}
              {sentStatus === "success" && (
                <div className="flex-grow-1">
                  <strong className="text-success">
                    Mensagem enviada com sucesso!
                  </strong>
                </div>
              )}
              <S.BoxImg>
                <a
                  href="https://www.linkedin.com/company/bowe-td/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} />
                </a>
                <a
                  href="https://www.instagram.com/bowe.td/?hl=pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} />
                </a>

                <a
                  href="https://www.facebook.com/bowe.td/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} />
                </a>
              </S.BoxImg>
            </S.Box>
          </S.AllBoxes>
          <S.Line />
          <S.AllBoxes>
            <S.Box minWidth>
              <S.Text mt="10px" hover={false}>
                Novos Negócios:
              </S.Text>
              <S.StyledLink href="tel:34997220313">
                <S.Text hover={false}>(34) 99722-0313</S.Text>
              </S.StyledLink>
              <S.StyledLink href="https://api.whatsapp.com/send?phone=5534997220313">
                <S.Text hover={false}>WhatsApp</S.Text>
              </S.StyledLink>
            </S.Box>

            <a
              rel="noreferrer"
              href="https://www.google.com/partners/agency?id=7919240427"
              target="_blank"
            >
              <img src="https://www.gstatic.com/partners/badge/images/2022/PremierBadgeClickable.svg" />
            </a>
          </S.AllBoxes>
        </Spacing>
      </S.FooterContainer>
      <CookieConsent
        className="consent-cookie-box"
        location="top"
        buttonText="Eu aceito"
        buttonStyle={{
          backgroundColor: "transparent",
          color: "#222137",
          border: "1px solid #222137",
          display: "flex",
          borderRadius: "4px",
        }}
        cookieName="consentCookieAccept"
        expires={150}
        style={{
          fontSize: "1rem",
          lineHeight: "1.3rem",
          fontWeight: "normal",
          background: "rgb(210 210 210 / 87%)",
          color: "#222137",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Nós utilizamos cookies e outras tecnologias semelhantes para
        personalizar e melhorar a sua experiência conosco. Para mais informações
        sobre cookies bem como para exercer o seu direito de desabilitá-los,
        consulte a nossa
        <a
          href="https://www.bowe.com.br/politicas-de-privacidade/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Política de Privacidade
        </a>
        . Ao clicar no botão ao lado, você concorda com todos os cookies.
      </CookieConsent>
    </>
  )
}
Footer.defaultProps = {
  textButton: "solicitar contato",
}

Footer.propProps = {
  textButton: PropTypes.string.isRequired,
}

export default Footer
