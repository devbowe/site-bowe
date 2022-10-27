import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { StyledContainer } from './styled'
import ButtonSimple from '../ButtonSimple';
import contactService from '../../services/contact';

const ContactFormMin = props => {
  const { color, colorHover, textColor, formTitle, textButton } = props
  const { register, handleSubmit, errors } = useForm();
  const [sendLoading, setSendLoading] = useState(false);
  const [sentStatus, setSendStatus] = useState('');

  const submit = params => {
    setSendLoading(true);
    contactService
      .send(params)
      .then(() => {
        setSendStatus('success');
      })
      .catch(error => {
        setSendStatus('error');
        console.log(error);
      })
      .finally(() => setSendLoading(false));
  };

  const onSubmit = data => {
    const param = {
      email: data.email,
      name: data.name,
      phone: data.phone
    }
    submit(param);
  };


  const customInputElement = {
    width: '100%', 
    fontFamily: 'Lato, sans-serif',
    fontWeight: '600'
  }

  return (
    <>
      <StyledContainer textInputFocus={color} className="d-flex my-5" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="subject" ref={register()} value={formTitle} />

        <div>
          <div className="input-control my-2 mr-5">
            <p>seu nome</p>
            <input
              style={customInputElement}
              type="text"
              placeholder="Nome"
              name="name"
              ref={register({
                required: {
                  value: true,
                  message: 'Por favor, informe seu nome',
                },
              })}
            />
            <div className="text-danger mt-2">{errors.name && errors.name.message}</div>
          </div>
        </div>
        <div>
          <div className="input-control my-2 mr-5">
            <p>seu email</p>
            <input
              style={customInputElement}
              type="email"
              placeholder="email@email.com.br"
              name="email"
              ref={register({
                required: {
                  value: true,
                  message: 'Por favor, informe seu email',
                },
              })}
            />
            <div className="text-danger mt-2">{errors.email && errors.email.message}</div>
          </div>
        </div>
        <div className="mt-5 mt-lg-4 mt-xl-4" style={{width: '195px'}}>
          <ButtonSimple
            text={sendLoading === true ? 'Enviando' : textButton}
            textColor={textColor}
            bgColor={color}
            hoverColor={colorHover}
            className="white-space-nowrap"
          />
        </div>
      </StyledContainer>

      {sentStatus === 'error' && (
        <div className="flex-grow-1">
          <strong className="text-danger">Ocorreu um erro ao enviar seus dados!</strong>
        </div>
      )}

      {sentStatus === 'success' && (
        <div className="flex-grow-1">
          <strong className="text-success">Mensagem enviada com sucesso!</strong>
        </div>
      )}
    </>
  )
}

ContactFormMin.defaultProps = {}

ContactFormMin.propProps = {
  color: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
}

export default ContactFormMin;
