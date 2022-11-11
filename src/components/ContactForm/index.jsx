import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { StyledContainer, StyledTextContainer } from "./styled"
import ButtonSimple from "../ButtonSimple"
import Typography from "../Typography"
// import contactService from "../../services/contact"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import "./contactForm.css"
import { useEffect } from "react"

const emailCorporativo = email => {
  const invalidDomains = [
    "@gmail.",
    "@yahoo.",
    "@hotmail.",
    "@live.",
    "@aol.",
    "@outlook.",
    "@terra.",
    "@bol.",
    "@uol.",
  ]

  for (let i = 0; i < invalidDomains.length; i++) {
    const domain = invalidDomains[i]
    if (email.toLowerCase().indexOf(domain) != -1) {
      return false
    }
  }
  return true
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-Z_ ]+$/, "Não pode conter números"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .test("is-corporate", "Informe um e-mail corporativo", email =>
      emailCorporativo(email)
    ),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
      "Digite um telefone válido"
    ),
})

const schemaTwo = yup.object().shape({
  namebusiness: yup.string().required("Campo obrigatório"),
  cf_modelo_de_negocio_que_atua: yup.string().required("Campo obrigatório"),
  cf_estrutura_do_time_de_mkt: yup.string().required("Campo obrigatório"),
  numberemployees: yup.string().required("Campo obrigatório"),
  cf_faturamento_mensal_da_empresa_selecao_correta: yup
    .string()
    .required("Campo obrigatório"),
  website: yup.string().required("Campo obrigatório"),
})

const ContactForm = ({
  color,
  colorHover,
  textColor,
  formTitle,
  formSubTitle,
  textButton = "",
  span,
  defaultUtmSource,
  defaultUtmMedium,
  defaultUtmCampaign,
  defaultUtmContent,
  defaultUtmTerm,
}) => {
  const [sendLoading, setSendLoading] = useState(false)
  const [sentStatus, setSendStatus] = useState("")
  const [secondStep, setSecondStep] = useState(false)
  const isSecondStep = secondStep ? "-step2" : ""
  const utmTermRef = useRef({ value: defaultUtmTerm })
  const utmSourceRef = useRef({ value: defaultUtmSource })
  const utmMediumRef = useRef({ value: defaultUtmMedium })
  const utmCampaignRef = useRef({ value: defaultUtmCampaign })
  const utmContentRef = useRef({ value: defaultUtmContent })

  // eslint-disable-next-line no-undef
  const urlBase = typeof window !== "undefined" ? window.location : ""
  const urlPath = typeof window !== "undefined" ? urlBase.href : ""
  const cutSlugPath =
    typeof window !== "undefined" ? urlBase.pathname.replaceAll("/", "") : ""

  const getUrlParamByName = (name, url) => {
    if (!url) url = urlPath
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
    var results = regex.exec(url)

    if (!results) return null
    if (!results[2]) return ""

    return decodeURIComponent(results[2].replace(/\+/g, " "))
  }

  utmTermRef.current.value =
    getUrlParamByName("utm_term") !== null
      ? getUrlParamByName("utm_term")
      : defaultUtmContent
  utmSourceRef.current.value =
    getUrlParamByName("utm_source") !== null
      ? getUrlParamByName("utm_source")
      : defaultUtmSource
  utmMediumRef.current.value =
    getUrlParamByName("utm_medium") !== null
      ? getUrlParamByName("utm_medium")
      : defaultUtmMedium
  utmCampaignRef.current.value =
    getUrlParamByName("utm_campaign") !== null
      ? getUrlParamByName("utm_campaign")
      : defaultUtmCampaign
  utmContentRef.current.value =
    getUrlParamByName("utm_content") !== null
      ? getUrlParamByName("utm_content")
      : defaultUtmContent

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(secondStep ? schemaTwo : schema),
  })

  const submit = () => {
    if (secondStep) {
      setSendLoading(true)
      setSendStatus("success")
    }

    setTimeout(() => {
      setSendStatus("")
      setSendLoading(false)
    }, 5000)
    // setSendLoading(true)
    // contactService
    //   .send(params)
    //   .then(() => {
    //     if (secondStep) setSendStatus("success")
    //   })
    //   .catch(error => {
    //     setSendStatus("error")
    //     console.log(error)
    //   })
    //   .finally(() => setSendLoading(false))
  }

  const onSubmit = data => {
    const firstParam = {
      utm_identifier: `${
        cutSlugPath === "" ? "home" : cutSlugPath
      }${isSecondStep}`,
      email: data.email,
      name: data.name,
      phone: data.phone,
      utm_term: utmTermRef.current.value,
      utm_source: utmSourceRef.current.value,
      utm_medium: utmMediumRef.current.value,
      utm_campaign: utmCampaignRef.current.value,
      utm_content: utmContentRef.current.value,
    }

    const secondParam = {
      utm_identifier: `${
        cutSlugPath === "" ? "home" : cutSlugPath
      }${isSecondStep}`,
      email: data.email,
      name: data.name,
      phone: data.phone,
      namebusiness: data.namebusiness,
      cf_modelo_de_negocio_que_atua: data.cf_modelo_de_negocio_que_atua,
      cf_estrutura_do_time_de_mkt: data.cf_estrutura_do_time_de_mkt,
      numberemployees: data.numberemployees,
      cf_faturamento_mensal_da_empresa_selecao_correta:
        data.cf_faturamento_mensal_da_empresa_selecao_correta,
      website: data.website,
      utm_term: utmTermRef.current.value,
      utm_source: utmSourceRef.current.value,
      utm_medium: utmMediumRef.current.value,
      utm_campaign: utmCampaignRef.current.value,
      utm_content: utmContentRef.current.value,
    }

    if (data.namebusiness === "") {
      submit(firstParam)
      setSecondStep(true)
    } else {
      submit(secondParam)
    }
  }

  useEffect(() => {}, [setSendStatus])

  return (
    <>
      <StyledTextContainer>
        <Typography type="h4" spanColor="third" color="secondary">
          {formTitle.map(element => {
            return element.color === "black" ? (
              <>
                {`${element.text} `} {span && <span>{span}</span>}
              </>
            ) : (
              <span>{element.text + " "}</span>
            )
          })}
        </Typography>
        <div className="mt-3">
          <Typography type="h6" color="firth">
            {formSubTitle}
          </Typography>
        </div>
      </StyledTextContainer>

      <StyledContainer
        textInputFocus={color}
        className="d-flex flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="hidden"
          name="subject"
          ref={register()}
          value={formTitle}
        />
        <input
          type="hidden"
          name="utm_source"
          id="utm_source"
          defaultValue={0}
          ref={(utmSourceRef, register)}
        />
        <input
          type="hidden"
          name="utm_medium"
          id="utm_medium"
          defaultValue={0}
          ref={(utmMediumRef, register)}
        />
        <input
          type="hidden"
          name="utm_campaign"
          id="utm_campaign"
          defaultValue={0}
          ref={(utmCampaignRef, register)}
        />
        <input
          type="hidden"
          name="utm_term"
          id="utm_term"
          defaultValue={0}
          ref={(utmTermRef, register)}
        />
        <input
          type="hidden"
          name="utm_content"
          id="utm_content"
          defaultValue={0}
          ref={(utmContentRef, register)}
        />

        <div
          id="first-step"
          style={{ display: secondStep === true ? "none" : "flex" }}
        >
          <div>
            <div className="input-control my-2 mr-5">
              <p>seu nome</p>
              <input
                type="text"
                placeholder="Nome"
                name="name"
                ref={register({
                  required: {
                    value: true,
                    message: "Por favor, informe seu nome",
                  },
                })}
              />
              <div className="text-danger mt-2">
                {errors.name && errors.name.message}
              </div>
            </div>
          </div>

          <div>
            <div className="input-control my-2 mr-5">
              <p>seu email</p>
              <input
                type="email"
                placeholder="email@email.com.br"
                name="email"
                ref={register({
                  required: {
                    value: true,
                    message: "Por favor, insira seu e-mail",
                  },
                })}
              />
              <div className="text-danger mt-2">
                {errors.email && errors.email.message}
              </div>
            </div>
          </div>
          <div>
            <div className="input-control my-2">
              <p>seu telefone</p>
              <InputMask mask="(99)99999-9999">
                {() => (
                  <input
                    type="text"
                    placeholder="Telefone"
                    name="phone"
                    ref={register({
                      required: {
                        value: true,
                        message: "Por favor, informe seu telefone",
                      },
                    })}
                  />
                )}
              </InputMask>
              <div className="text-danger mt-2">
                {errors.phone && errors.phone.message}
              </div>
            </div>
          </div>
          <div className="mt-5 mt-lg-4 mt-xl-4 px-lg-3 px-xl-3">
            <ButtonSimple
              text={sendLoading === true ? "Enviando..." : textButton}
              textColor={textColor}
              bgColor={color}
              hoverColor={colorHover}
            />
          </div>
        </div>

        <div
          id="second-step"
          style={{
            display: secondStep === true ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <div className="row">
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-12 col-md-4 col-sm-6">
                  <div className="input-control my-2 mr-5">
                    <p>Nome da Empresa</p>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      name="namebusiness"
                      ref={register({
                        required: {
                          value: true,
                          message: "Por favor, informe o nome da empresa",
                        },
                      })}
                    />
                    <div className="text-danger mt-2">
                      {errors.namebusiness && errors.namebusiness.message}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-sm-6">
                  <div className="input-control my-2 mr-5">
                    <p>Modelo de negócio</p>
                    <select
                      name="cf_leads_modelo_negocio"
                      ref={register({
                        required: {
                          value: true,
                          message: "Por favor, informe o modelo de negócio",
                        },
                      })}
                    >
                      <option selected value="">
                        Modelo de Negócio*
                      </option>
                      <option value="B2C">B2C</option>
                      <option value="B2B">B2B</option>
                      <option value="B2B2C">B2B2C</option>
                    </select>
                    <div className="text-danger mt-2">
                      {errors.cf_modelo_de_negocio_que_atua &&
                        errors.cf_modelo_de_negocio_que_atua.message}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-sm-6">
                  <div className="input-control my-2 mr-5">
                    <p>Estrutura do time de Mkt</p>
                    <select
                      name="cf_estrutura_do_time_de_mkt"
                      ref={register({
                        required: {
                          value: true,
                          message:
                            "Por favor selecione, opção da natureza do seu negócio",
                        },
                      })}
                    >
                      <option selected value="">
                        Selecione
                      </option>
                      <option value="Mais de 6 pessoas">
                        Mais de 6 pessoas
                      </option>
                      <option value="De 4 a 6 pessoas">De 4 a 6 pessoas</option>
                      <option value="De 2 a 4 pessoas">De 2 a 4 pessoas</option>
                      <option value="1 pessoa">1 pessoa</option>
                      <option value="Não tenho time de Mkt">
                        Não tenho time de Mkt
                      </option>
                    </select>
                    <div className="text-danger mt-2">
                      {errors.optionbusiness &&
                        errors.cf_modelo_de_negocio_que_atua.message}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-4 col-sm-6">
                  <div className="input-control my-2 mr-5">
                    <p>Nº de funcionários</p>
                    <select
                      name="cf_numero_de_funcionarios_0"
                      ref={register({
                        required: {
                          value: true,
                          message: "Por favor, informe número de funcionários",
                        },
                      })}
                    >
                      <option selected value="">
                        Selecione
                      </option>
                      <option value="1-10">De 1 a 10</option>
                      <option value="11-25">De 11 a 25</option>
                      <option value="25-50">De 25 a 50</option>
                      <option value="51-100">De 51 a 100</option>
                      <option value="101-300">De 101 a 300</option>
                      <option value="301-1000">De 301 a 1000</option>
                      <option value="1001-5000">De 1001 a 5000</option>
                      <option value="5000+">5000+</option>
                    </select>
                    <div className="text-danger mt-2">
                      {errors.numberemployees && errors.numberemployees.message}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-sm-6">
                  <div className="input-control my-2 mr-5">
                    <p>Faturamento Anual</p>
                    <select
                      name="cf_faturamento_mensal_da_empresa_selecao_correta"
                      ref={register({
                        required: {
                          value: true,
                          message: "Por favor, informe o seu cargo na empresa",
                        },
                      })}
                    >
                      <option selected value="">
                        Selecione
                      </option>
                      <option value="Acima de 500M">Acima de 500M</option>
                      <option value="Entre 250M e 500M">
                        Entre 250M e 500M
                      </option>
                      <option value="Entre 16M e 250M">Entre 16M e 250M</option>
                      <option value="Menos que 16M">Menos que 16M</option>
                    </select>
                    <div className="text-danger mt-2">
                      {errors.cf_faturamento_mensal_da_empresa_selecao_correta &&
                        errors.cf_faturamento_mensal_da_empresa_selecao_correta
                          .message}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-sm-6">
                  <div className="input-control my-2 mr-5">
                    <p>Site da empresa</p>
                    <input
                      type="text"
                      placeholder="Site da empresa"
                      name="website"
                      ref={register({
                        required: {
                          value: true,
                          message: "Por favor, informe o site da empresa",
                        },
                      })}
                    />
                    <div className="text-danger mt-2">
                      {errors.website && errors.website.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-3 col-lg-3 col-md-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="mt-5 mt-lg-4 mt-xl-4 px-lg-3 px-xl-3">
                <ButtonSimple
                  text={sendLoading === true ? "Enviando..." : textButton}
                  textColor={textColor}
                  bgColor={color}
                  hoverColor={colorHover}
                  style={{ marginTop: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>

      {sentStatus === "error" && (
        <div className="flex-grow-1 error-message">
          <strong className="text-danger">
            Ocorreu um erro ao enviar seus dados!
          </strong>
        </div>
      )}

      {sentStatus === "success" && (
        <div className="flex-grow-1 success-message">
          <strong className="text-success">
            Mensagem enviada com sucesso!
          </strong>
        </div>
      )}
    </>
  )
}

ContactForm.defaultProps = {
  span: "",
  defaultUtmSource: "",
  defaultUtmMedium: "",
  defaultUtmCampaign: "",
  defaultUtmTerm: "",
  defaultUtmContent: "utm_content",
  defaultNamePage: "",
}

ContactForm.propProps = {
  span: PropTypes.string,
  color: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
  formSubTitle: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  formTitleSpotlight: PropTypes.string,
  defaultUtmSource: PropTypes.string,
  defaultUtmMedium: PropTypes.string,
  defaultUtmCampaign: PropTypes.string,
  defaultUtmContent: PropTypes.string,
  defaultNamePage: PropTypes.string,
  defaultUtmTerm: PropTypes.string,
}

export default ContactForm
