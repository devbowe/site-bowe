import React from "react";
import pageWraper from "../../default/pageWrapper"
import {
  MenuNav,
  Footer,
  Spacing,
  Typography,
  Video,
} from "../../index"
import { BannerContainer, Flex } from "../styled"
import scrollTo from "gatsby-plugin-smoothscroll"
import * as S from "./styled"
import "./politicasDePrivacidadePage.css"

const PoliticasDePrivacidade = () => {
  return (
    <>
      <BannerContainer className="banner" bgColor="darkBlue" bannerImg>
        <S.SpacingMenuNav>
          <MenuNav classMenuNav="bd-nav-dark" />
        </S.SpacingMenuNav>
        <Spacing p="0 6rem 6rem">
          <Flex fastMobile>
            <S.ContextBanner>
              <Typography type="body" color="primary" mb="20px" width="80%">
                POLÍTICA DE PRIVACIDADE DA BOWE
              </Typography>
              <Typography type="h2" color="primary" width="60%">
                Para você entender <br />
                melhor o que <br />
                fazemos com as suas informações
              </Typography>
            </S.ContextBanner>
            <div>
              <Video />
            </div>
          </Flex>
        </Spacing>
      </BannerContainer>

      <section className="wraper-content">
        <div className="row">
          <nav className="col-12 col-md-4 sidebar">
            <ul>
              <li>
                <a
                  onClick={() => {
                    scrollTo("#politica")
                  }}
                >
                  Políticas de privacidade
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".first-topic")
                  }}
                >
                  1. Data de disponibilização do texto
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo("#second-topic")
                  }}
                >
                  2. Explicação dos termos técnicos ou em língua estrangeira
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".third-topic")
                  }}
                >
                  3. Privacidade do usuário e operadores de dados terceirizados
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".fourth-topic")
                  }}
                >
                  4. Coleta de dados pessoais
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".fifth-topic")
                  }}
                >
                  5. Finalidades e bases legais para o tratamento de dados
                  pessoais
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".sixth-topic")
                  }}
                >
                  6. Compartilhamento dos dados pessoais dos usuários
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".seventh-topic")
                  }}
                >
                  7. Exclusão de dados pessoais dos usuários do site
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".eighth-topic")
                  }}
                >
                  8. Direitos do usuário e titular dos dados pessoais
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".ninth-topic")
                  }}
                >
                  9. Segurança
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".tenth-topic")
                  }}
                >
                  10. Mudanças na política de privacidade
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".eleventh-topic")
                  }}
                >
                  11. Encarregado
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".twelfth-topic")
                  }}
                >
                  12. Disposições gerais
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".thirteenth-topic")
                  }}
                >
                  13. Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className="col-12 col-md-8 content">
            <div className="info">
              <p>
                Fizemos o máximo para explicar de forma clara e simples quais
                dados pessoais precisaremos de você e o que <br />
                vamos fazer com cada um deles. Por isso, separamos abaixo os
                pontos mais importantes, que também podem <br />
                ser lidos de forma bem completa e detalhada nas nossas{" "}
                <strong>Políticas de Privacidade.</strong>
                <br />
                <br />
                Além disso, estamos sempre disponíveis para tirar qualquer
                dúvida que você tenha pelo e-mail <br />
                <a href="mailto:mailto:bowe@bowe.com.br">bowe@bowe.com.br</a>,
                pelo chat disponível na plataforma; pelo telefone (34)
                3305-8885, disponível de Segunda à <br />
                Sexta-Feira, das 08h00min às 18h00min; e pelo endereço físico
                Avenida Belarmino Cotta Pacheco, nº 8, sala 1, <br />
                Santa Mônica, cidade de Uberlândia – MG.
                <br />
                <br />
                <strong>1.</strong> Para garantir a segurança dos seus dados
                pessoais, utilizamos certificado de segurança https e os
                servidores <br />
                terceirizados{" "}
                <a href="https://www.rdstation.com/" target="_blank" rel="noreferrer" >
                  RD Station
                </a>{" "}
                (recomendamos que você leia os{" "}
                <a
                  href="https://www.rdstation.com/termos-de-uso-do-software/"
                  target="_blank" rel="noreferrer"
                >
                  termos de uso
                </a>{" "}
                e{" "}
                <a
                  href="https://resultadosdigitais.com.br/politicas-de-privacidade/?_ga=2.45319972.1007747834.1566832111-1143749053.1566832111"
                  target="_blank" rel="noreferrer"
                >
                  políticas de privacidade
                </a>{" "}
                da RD <br />
                Station, pois esses documentos não possuem relação com o
                presente texto).{" "}
                <strong>
                  Com isso, essa empresa <br />
                  passa a ter acesso aos seus dados pessoais, somente para
                  armazená-los, assim que você <br />
                  os fornece no site.
                </strong>{" "}
                Se você tiver algum problema com isso, pedimos que não insira
                suas informações <br />
                em nenhum formulário do site, pois não conseguiremos guardá-las
                de outra forma.
                <br />
                <br />
                <strong>2.</strong> Quando você for entrar em contato conosco
                pela plataforma será necessário informar os seguintes dados:{" "}
                <br />
                nome, e-mail, telefone, cargo, natureza do negócio, número de
                funcionários e site da empresa.
                <br />
                <br />
                <strong>3.</strong> Caso você queira se candidatar para uma das
                vagas anunciadas no site, você deverá informar os seguintes{" "}
                <br />
                dados: nome completo, e-mail, telefone celular, telefone
                residencial, CPF, data de nascimento, última empresa <br />
                que trabalhou, breve descrição pessoal e link para
                currículo/portifólio.
                <br />
                <br />
                <strong>4.</strong> Quando você entra no nosso site,
                automaticamente são inseridos cookies no seu navegador e
                colhemos os <br />
                seguintes dados de você: número de IP (Internet Protocol),
                localização, fonte de referência, tipo de navegador, <br />
                duração da visita e páginas visitadas. Essas informações são
                obtidas sem que você tenha que preencher <br />
                formulários e as coletamos porque temos uma obrigação definida
                em Lei de armazenar os seus registros <br />
                de acesso por 06 (seis) meses. Além disso, nos ajuda a deixar a
                sua experiência melhor e mais personalizada.
                <br />
                <br />
                <strong>5.</strong> Nós vamos armazenar também todas as
                conversas que você tiver conosco, por e-mail, telefone e
                inclusive <br />
                pelo chat on-line pela plataforma{" "}
                <a href="https://www.pipedrive.com/pt" target="_blank" rel="noreferrer">
                  Pipedrive
                </a>
                , pois isso irá melhorar o seu atendimento e torná-lo mais
                eficiente. <br />
                Sem esse histórico, provavelmente todas as vezes que você
                utilizasse o site teria que repetir o que já nos passou <br />
                anteriormente.
                <br />
                <br />
                <strong>6.</strong> Todos os seus dados são tratados com
                finalidades específicas e de acordo com a Lei de Proteção de
                Dados <br />
                Pessoais. Todas essas informações estão descritas em uma tabela,
                para facilitar a sua visualização, nas nossas <br />
                Políticas de Privacidade.
                <br />
                <br />
                <strong>7.</strong> Mesmo que você já tenha nos fornecido seus
                dados pessoais, você possui total direito de, a qualquer <br />
                momento: confirmar a existência de tratamento dos seus dados;
                acessar os seus dados; corrigir os seus dados; <br />
                tornar anônimo os dados; bloquear ou eliminar os dados
                desnecessários, excessivos ou tratados em <br />
                desconformidade com a Lei; pedir a portabilidade dos dados a
                outro fornecedor; eliminar dados, exceto <br />
                aqueles exigidos por lei; obter informação sobre quem a{" "}
                <strong>BOWE </strong>
                realizou uso compartilhado de dados; obter <br />
                informação sobre a possibilidade de não fornecer consentimento e
                sobre as consequências da negativa; e <br />
                voltar atrás e revogar o seu consentimento.
                <br />
                <br />
                <strong>8.</strong> Nossa Política de Privacidade poderá mudar,
                mas você sempre poderá acessar a versão mais atualizada no{" "}
                <br />
                nosso site. Além disso, se formos realizar alguma ação que a lei
                exija sua autorização, você receberá um aviso <br />
                antes para poder aceitar ou recusar.
                <br />
                <br />
                9. A Política de Privacidade a seguir está dividida da seguinte
                forma para facilitar o seu acesso à informação:
                <br />
                a) Data de Disponibilização do Texto;
                <br />
                b) Explicação dos Termos Técnicos ou em Língua Estrangeira;
                <br />
                c) Privacidade do Usuário e Operadores de Dados Terceirizados;
                <br />
                d) Coleta de Dados Pessoais;
                <br />
                e) Finalidades e Bases Legais para o Tratamento de Dados
                Pessoais;
                <br />
                f) Compartilhamento dos Dados Pessoais dos Usuários;
                <br />
                g) Exclusão de Dados Pessoais dos Usuários do Site;
                <br />
                h) Direitos do Usuário e Titular dos Dados Pessoais;
                <br />
                i) Segurança;
                <br />
                j) Mudanças na Política de Privacidade;
                <br />
                k) Disposições Gerais;
                <br />
                l) Contato.
              </p>
              <hr />

              <div className="intro-topic" id="politica">
                <h3>Políticas de privacidade</h3>
                <p>
                  Antes de acessar o site <strong>BOWE</strong>, é importante
                  que você leia, entenda e aceite de forma livre, inequívoca e{" "}
                  <br />
                  informada estas Políticas de Privacidade.
                  <br />
                  <br />
                  O site denominado “BOWE”, cujo domínio é www.bowe.com.br, é de
                  propriedade, mantido e controlado pela <br />
                  <strong>BOWE LTDA - ME</strong>, pessoa jurídica constituída
                  na forma de sociedade empresária Limitada, inscrita no <br />
                  CNPJ sob o nº 19.463.933/0001-43, com sede na Avenida
                  Belarmino Cotta Pacheco, nº 8, sala 1, Santa Mônica, <br />
                  cidade de Uberlândia, estado de Minas Gerais.
                  <br />
                  <br />
                  O presente documento visa prestar informações sobre a coleta e
                  tratamento dos dados pessoais fornecidos <br />
                  pelos Usuários e está em conformidade com a Lei nº 12.965/2014
                  (Marco Civil da Internet) e com a Lei nº <br />
                  13.709/2018 (Lei Geral de Proteção de Dados).
                </p>
              </div>

              <hr />

              <div className="first-topic">
                <h3>1. Data de disponibilização do texto</h3>
                <p>O presente documento foi disponibilizado em 21/09/2020.</p>
              </div>

              <hr />

              <div className="second-topic" id="second-topic">
                <h3>
                  2. Explicação dos termos técnicos ou em língua estrangeira
                </h3>
                <p>
                  Abaixo estão dispostos os significados das nomenclaturas
                  técnicas e termos na língua inglesa.
                  <br />
                  <br />
                  API: Sigla para Application Programming Interface entendida
                  como conjunto de rotinas e padrões de <br />
                  programação para acesso a um aplicativo de software ou
                  plataforma baseada na Web. <br />
                  Cookies: Pequenos arquivos de texto que ficam gravados no
                  computador do internauta e podem ser <br />
                  recuperados pelo site que o enviou durante a navegação. São
                  utilizados principalmente para identificar e <br />
                  armazenar informações sobre os visitantes.
                  <br />
                  <br />
                  Criptografia: Conjunto de princípios e técnicas para cifrar a
                  escrita, torná-la ininteligível para os que não <br />
                  tenham acesso às convenções combinadas.
                  <br />
                  <br />
                  Download: Transferência de arquivo de um determinado servidor
                  para o computador do Usuário. <br />
                  Encarregado: Pessoa indicada pelo controlador e operador para
                  atuar como canal de comunicação entre o <br />
                  controlador, os titulares dos dados e a Autoridade Nacional de
                  Proteção de Dados (ANPD). <br />
                  <br />
                  <br />
                  Https: Sigla de Hyper Text Transfer Protocol Secure, que em
                  português significa Protocolo Seguro de <br />
                  Transferência de Hipertexto. É um protocolo de comunicação
                  utilizado para sistemas de informação de <br />
                  hipermídia, sendo a base para a comunicação de dados da World
                  Wide Web (www).
                  <br />
                  <br />
                  IP (ou Internet Protocol): Identificação única para cada
                  computador conectado a uma rede.
                  <br />
                  <br />
                  Site: Local na Internet identificado por um nome de domínio,
                  constituído por uma ou mais páginas de <br />
                  hipertexto, que podem conter textos, gráficos e informações em
                  multimídia.
                  <br />
                  <br />
                  Vírus: Software malicioso que infecta sistemas e computadores,
                  com objetivo de causar algum dano, faz cópias <br />
                  de si mesmo e tenta se espalhar para outros computadores,
                  utilizando-se de diversos meios.
                </p>
              </div>

              <hr />

              <div className="third-topic">
                <h3>
                  3. Privacidade do usuário e operadores de dados terceirizados
                </h3>
                <p>
                  3.1. Proteger sua privacidade é muito importante para nós.
                  Seus dados são transferidos de forma criptografada <br />e
                  armazenados em servidores controlados pela{" "}
                  <a href="https://www.rdstation.com/" target="_blank" rel="noreferrer">
                    RD Station
                  </a>
                  , cujo acesso é restrito. Além disso, a plataforma se <br />
                  utiliza firewalls e certificado de segurança, dispondo de uma
                  variedade de tecnologias e procedimentos de <br />
                  segurança para ajudar a proteger as informações dos Usuários
                  <br />
                  <br />
                  3.2. Utilizamos a API{" "}
                  <a href="https://www.pipedrive.com/pt" target="_blank" rel="noreferrer">
                    Pipedrive
                  </a>{" "}
                  como forma de comunicação do Usuário conosco. Todas as
                  conversas são <br />
                  armazenadas nos servidores independentes da Pipedrive com o
                  objetivo de possibilitar as respostas aos <br />
                  Usuários e para futuros contatos (recomendamos que você leia
                  os{" "}
                  <a
                    href="https://www.pipedrive.com/en/terms-of-service"
                    target="_blank" rel="noreferrer"
                  >
                    termos de uso
                  </a>{" "}
                  e as{" "}
                  <a
                    href="https://www.pipedrive.com/en/privacy"
                    target="_blank" rel="noreferrer"
                  >
                    políticas de privacidade
                  </a>{" "}
                  <br />
                  da Pipedrive, pois esses documentos não possuem relação com o
                  presente texto). <br />
                  3.2.1. A finalidade do chat online é fornecer uma ferramenta
                  adicional para que os Usuários possam contatar a <br />
                  <strong>BOWE</strong> e buscar maiores esclarecimentos sobre
                  os serviços. <br />
                  3.2.2. O Cliente, ao utilizar o chat on-line declara estar
                  ciente de que o conteúdo das mensagens é de exclusiva <br />
                  responsabilidade do emissor.
                  <br />
                  <br />
                  3.3. Além disso, o site conta com certificado de segurança
                  https. Por isso, ao transmitir informações você deve <br />
                  sempre garantir que seu navegador seja capaz de validar esse
                  certificado.
                  <br />
                  <br />
                  3.4. Os servidores utilizados pela <strong>BOWE</strong> são
                  munidos de mecanismos aptos a assegurar a segurança de seus{" "}
                  <br />
                  dados que estão localizados fora do Brasil, mas continuam em
                  países que proporcionam grau de proteção de <br />
                  dados pessoais adequado, conforme artigo 33, I da Lei
                  13.709/18.
                  <br />
                  <br />
                  <span className="underscore">
                    <strong>
                      3.5 Todos os registros de acesso, conjunto de informações
                      referentes à data e hora de uso <br />
                      de uma determinada aplicação de internet a partir de um
                      determinado endereço IP, <br />
                      serão mantidos pela BOWE, sob sigilo, em ambiente
                      controlado e de segurança da RD <br />
                      Station, pelo prazo mínimo de 6 (seis) meses, por ordem da
                      Lei n. 12.965/2014.
                    </strong>
                  </span>
                </p>
              </div>

              <hr />

              <div className="fourth-topic">
                <h3>4. Coleta de dados pessoais</h3>
                <p>
                  4.1.{" "}
                  <span className="underscore">
                    Informações fornecidas livremente pelos Usuários.
                  </span>{" "}
                  <br />
                  4.1.1 Caso o Usuário queira entrar em contato com a BOWE:
                  nome, e-mail, telefone, cargo, natureza do <br />
                  negócio, número de funcionários e site da empresa. <br />
                  4.1.2. Caso o Usuário queira se candidatar a uma das vagas
                  anunciadas no site da BOWE: nome completo, <br />
                  e-mail, telefone celular, telefone residencial, CPF, data de
                  nascimento, última empresa que trabalhou, breve <br />
                  descrição pessoal e link para currículo/portifólio.
                  <br />
                  <br />
                  4.2.{" "}
                  <span className="underscore">
                    Informações que coletamos de forma indireta:
                  </span>{" "}
                  O site coleta dados pessoais de forma indireta, por cookies{" "}
                  <br />
                  inseridos no seu navegador a fim de melhorar a experiência do
                  Usuário e cumprir obrigações legais. São <br />
                  coletadas informações, como: endereço IP, fonte de referência,
                  tipo de navegador, duração da visita e páginas <br />
                  visitadas.
                  <br />
                  <br />
                  4.3. <span className="underscore">
                    Histórico de contato:
                  </span>{" "}
                  A BOWE armazena informações a respeito de todas as interações
                  já realizadas <br />
                  entre os Usuários por meio da plataforma, como mensagens em
                  chat, troca de e-mails e upload de arquivos. <br />
                  Tais dados ficam armazenados para que se tenha um histórico
                  sobre o Usuário e, com isso, facilite-se a <br />
                  comunicação, a resolução de questionamentos seja feita de
                  forma mais efetiva e a experiência do Usuário <br />
                  no site seja mais personalizada.
                  <br />
                  <br />
                  4.4. O Usuário declara que as informações fornecidas são
                  completas, verdadeiras, atuais e precisas, sendo de <br />
                  sua total responsabilidade a atualização dos dados sempre que
                  houver modificação.
                </p>
              </div>

              <hr />

              <div className="fifth-topic">
                <h3>
                  5. finalidades e bases legais para o tratamento de dados
                  pessoais
                </h3>
                <p>
                  5.1. A <strong>BOWE</strong> poderá utilizar os dados pessoais
                  dos Usuários para as finalidades que serão apresentadas a
                  seguir:
                </p>
                <br />
                <br />
                <div className="dados-pessoais-lg">
                  <table>
                    <thead>
                      <tr>
                        <th>Tipo de Dado Pessoal</th>
                        <th>Base Legal</th>
                        <th>Finalidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nome</td>
                        <td>
                          Necessário para a execução de contrato ou de
                          procedimentos preliminares relacionados a contrato do
                          qual seja parte o titular, a pedido do titular dos dados
                          (Art. 7º, V, Lei nº 13.709/2018).
                        </td>
                        <td>
                          Identificação do Usuário. Trata-se de dado pessoal
                          essencial para que seja possível entrar em contato com o
                          Usuário, para atender às suas solicitações e fornecer
                          respostas direcionadas.
                        </td>
                      </tr>
                      <tr>
                        <td>CPF</td>
                        <td>
                          Necessário para a execução de contrato ou de
                          procedimentos preliminares relacionados a contrato do
                          qual seja parte o titular, a pedido do titular dos dados
                          (Art. 7º, V, Lei nº 13.709/2018).
                        </td>
                        <td>
                          Identificação do Usuário. Trata-se de dado pessoal
                          essencial para que seja possível identificar o Usuário
                          que se candidatar a uma das vagas anunciadas no site da
                          <strong> BOWE</strong> e averiguar que o CPF é
                          compatível com o nome informado no formulário.
                        </td>
                      </tr>
                      <tr>
                        <td>Data de Nascimento</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>E-mail</td>
                        <td>
                          A) Necessário para a execução de contrato ou de
                          procedimentos preliminares relacionados a contrato do
                          qual seja parte o titular, a pedido do titular dos dados
                          (Art. 7º, V, Lei nº 13.709/2018). <br />
                          <br />
                          B) Necessário para atender os interesses legítimos de
                          controlador ou de terceiro (art. 7º, IX, Lei nº
                          13.709/2018).
                        </td>
                        <td>
                          A) É utilizado para contato e acompanhamento de dúvidas.
                          <br />
                          <br />
                          B) Utilizado para o envio de e-mails promocionais. No
                          entanto, o Cliente poderá cancelar a assinatura a
                          qualquer momento, clicando no link disponibilizado para
                          esse fim, ao final da mensagem eletrônica.{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Telefone Residencial e Telefone Celular</td>
                        <td>
                          Necessário para a execução de contrato ou de
                          procedimentos preliminares relacionados a contrato do
                          qual seja parte o titular, a pedido do titular dos dados
                          (Art. 7º, V, Lei nº 13.709/2018).
                        </td>
                        <td>
                          Meio de comunicação com o Usuário, para atender às suas
                          solicitações e fornecer respostas direcionadas.{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Cargo</td>
                        <td>
                          Necessário para atender aos interesses legítimos do
                          controlador ou de terceiro (Art. 7º, IX, Lei nº
                          13.709/2018).
                        </td>
                        <td>
                          É relevante para saber se a pessoa que está se
                          comunicando no site e, eventualmente falando em nome de
                          uma empresa, realmente possui legitimidade para tal
                          representação.{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Site da empresa, Natureza do negócio, Número de
                          funcionários
                        </td>
                        <td>
                          Necessário para atender aos interesses legítimos do
                          controlador ou de terceiro (Art. 7º, IX, Lei nº
                          13.709/2018).
                        </td>
                        <td>
                          Direcionamento do conteúdo do site e da abordagem da
                          <strong> BOWE</strong> com o cliente, melhorando a
                          experiência do Usuário. Além disso, é relevante para
                          saber em qual mercado a empresa atua e avaliar se, de
                          fato, trata-se do público-alvo dos serviços.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          IP (Internet Protocol), Localização, Fonte de
                          referência, Tipo de navegador, Duração da visita,
                          Páginas visitadas
                        </td>
                        <td>
                          Cumprimento de obrigação legal ou regulatória pelo
                          controlador (Art. 7º, II, Lei nº 13.709/2018).
                        </td>
                        <td>
                          Obediência ao artigo 15 da Lei n. 12.965/2014, que impõe
                          o dever da <strong>BOWE</strong> de manter os
                          respectivos registros de acesso a aplicações de
                          internet, sob sigilo, em ambiente controlado e de
                          segurança, pelo prazo de 6 (seis) meses
                        </td>
                      </tr>
                      <tr>
                        <td>Histórico de conversas</td>
                        <td>
                          Necessário para atender aos interesses legítimos do
                          controlador ou de terceiro (Art. 7º, IX, Lei nº
                          13.709/2018).
                        </td>
                        <td>
                          Criação de um histórico sobre o Usuário, facilidade na
                          comunicação, maior efetividade na resolução de
                          questionamentos e melhoria na experiência do Usuário no
                          site.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Data de Nascimento, Última Empresa que trabalhou, Breve
                          Descrição Pessoal e Link para currículo ou Portifólio
                        </td>
                        <td>
                          Necessário para atender aos interesses legítimos do
                          controlador ou de terceiro (Art. 7º, IX, Lei nº
                          13.709/2018).
                        </td>
                        <td>
                          Utilizado para avaliar o perfil do Usuário que se
                          candidata a uma das vagas anunciadas no site da{" "}
                          <strong> BOWE </strong>
                          para identificar e averiguar habilidades do
                          profissional, bem como sua qualificação e experiência.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="dados-pessoais-xs">
                  <h3 className="dados-pessoais-title-no-padding">Nome</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados (Art. 7º, V, Lei nº 13.709/2018).
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  Identificação do Usuário. Trata-se de dado pessoal essencial para que seja possível entrar em contato com o Usuário, para atender às suas solicitações e fornecer respostas direcionadas.

                  <h3 className="dados-pessoais-title">CPF</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados (Art. 7º, V, Lei nº 13.709/2018).
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  Identificação do Usuário. Trata-se de dado pessoal essencial para que seja possível identificar o Usuário que se candidatar a uma das vagas anunciadas no site da BOWE e averiguar que o CPF é compatível com o nome informado no formulário.

                  {/* <h3>Data de Nascimento</h3> */}

                  <h3 className="dados-pessoais-title">E-mail</h3>
                  <strong>Base Legal</strong>
                  <br />
                  A) Necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados (Art. 7º, V, Lei nº 13.709/2018).
                  <br />
                  B) Necessário para atender os interesses legítimos de controlador ou de terceiro (art. 7º, IX, Lei nº 13.709/2018).
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  A) É utilizado para contato e acompanhamento de dúvidas.
                  <br />
                  B) Utilizado para o envio de e-mails promocionais. No entanto, o Cliente poderá cancelar a assinatura a qualquer momento, clicando no link disponibilizado para esse fim, ao final da mensagem eletrônica.

                  <h3 className="dados-pessoais-title">Telefone Residencial e Telefone Celular</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados (Art. 7º, V, Lei nº 13.709/2018).
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  Meio de comunicação com o Usuário, para atender às suas solicitações e fornecer respostas direcionadas.

                  <h3 className="dados-pessoais-title">Cargo</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Necessário para atender aos interesses legítimos do controlador ou de terceiro (Art. 7º, IX, Lei nº 13.709/2018).	
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  É relevante para saber se a pessoa que está se comunicando no site e, eventualmente falando em nome de uma empresa, realmente possui legitimidade para tal representação.

                  <h3 className="dados-pessoais-title">Site da empresa, Natureza do negócio, Número de funcionários</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Necessário para atender aos interesses legítimos do controlador ou de terceiro (Art. 7º, IX, Lei nº 13.709/2018).	
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  Direcionamento do conteúdo do site e da abordagem da BOWE com o cliente, melhorando a experiência do Usuário. Além disso, é relevante para saber em qual mercado a empresa atua e avaliar se, de fato, trata-se do público-alvo dos serviços.

                  <h3 className="dados-pessoais-title">IP (Internet Protocol), Localização, Fonte de referência, Tipo de navegador, Duração da visita, Páginas visitadas</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Cumprimento de obrigação legal ou regulatória pelo controlador (Art. 7º, II, Lei nº 13.709/2018).	
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  Obediência ao artigo 15 da Lei n. 12.965/2014, que impõe o dever da BOWE de manter os respectivos registros de acesso a aplicações de internet, sob sigilo, em ambiente controlado e de segurança, pelo prazo de 6 (seis) meses

                  <h3 className="dados-pessoais-title">Histórico de conversas</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Necessário para atender aos interesses legítimos do controlador ou de terceiro (Art. 7º, IX, Lei nº 13.709/2018).	
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  Criação de um histórico sobre o Usuário, facilidade na comunicação, maior efetividade na resolução de questionamentos e melhoria na experiência do Usuário no site.

                  <h3 className="dados-pessoais-title">Data de Nascimento, Última Empresa que trabalhou, Breve Descrição Pessoal e Link para currículo ou Portifólio</h3>
                  <strong>Base Legal</strong>
                  <br />
                  Necessário para atender aos interesses legítimos do controlador ou de terceiro (Art. 7º, IX, Lei nº 13.709/2018).	
                  <br />
                  <br />

                  <strong>Finalidade</strong>
                  <br />
                  Utilizado para avaliar o perfil do Usuário que se candidata a uma das vagas anunciadas no site da BOWE para identificar e averiguar habilidades do profissional, bem como sua qualificação e experiência.
                </div>

              </div>

              <hr />

              <div className="sixth-topic">
                <h3>6. Compartilhamento dos dados pessoais dos usuários</h3>
                <p>
                  6.1. Somente poderão ter acesso aos dados pessoais dos
                  Usuários os profissionais da equipe de marketing e <br />
                  vendas da BOWE, tendo em vista que tais pessoas gerenciam e
                  acompanham o site, além de responderem às <br />
                  solicitações dos Usuários e entrarem em contato de forma
                  ativa.
                  <br />
                  <br />
                  <span className="underscore">
                    <strong>
                      6.2. Além disso, poderão ter acesso aos dados pessoais os
                      operadores de dados, RD <br />
                      Station e Pipedrive, uma vez que tais informações ficam
                      armazenadas em seus <br />
                      servidores. Esclarece-se que tais operadores não possuem
                      autorização para fazer <br />
                      nenhum tipo de tratamento, a não ser o armazenamento.
                    </strong>
                  </span>
                </p>
              </div>

              <hr />

              <div className="seventh-topic">
                <h3>7. Exclusão de dados pessoais dos usuários do site</h3>
                <p>
                  <span className="underscore">
                    7.1. Após ser atingida a finalidade pretendida pelo
                    tratamento dos dados pessoais ou diante de solicitação do{" "}
                    <br />
                    Usuário, todos os seus dados pessoais serão deletados
                    imediatamente e permanentemente do site, exceto <br />
                    os dados cuja manutenção seja obrigatória por lei ou
                    regulação, os dados necessários para o exercício regular de{" "}
                    <br />
                    direitos em processo judicial, administrativo ou arbitral,
                    como os registros de acesso (conjunto de informações <br />
                    referentes à data e hora de uso de uma determinada aplicação
                    de internet a partir de um determinado <br />
                    endereço IP), que serão mantidos, sob sigilo, em ambiente
                    controlado e de segurança, pelo prazo de 6 (seis) <br />
                    meses, nos termos da Lei n. 12.965/2014.
                  </span>
                </p>
              </div>

              <hr />

              <div className="eighth-topic">
                <h3>8. Direitos do usuário e titular dos dados pessoais</h3>
                <p>
                  8.1. O titular dos dados pessoais (Usuário) tem direito a
                  obter da BOWE, em relação aos dados por ela <br />
                  tratados, a qualquer momento e mediante requisição nos seus
                  canais de comunicação:
                  <br />
                  8.1.1. Confirmação da existência de tratamento de dados;{" "}
                  <br />
                  8.1.2. Acesso aos dados; <br />
                  8.1.3. Correção de dados; <br />
                  incompletos, inexatos ou desatualizados; <br />
                  8.1.4. Anonimização, bloqueio ou eliminação de dados
                  desnecessários, excessivos ou tratados em <br />
                  desconformidade com o disposto na Lei 13.709/2018; <br />
                  8.1.5. Portabilidade dos dados a outro fornecedor de serviço
                  ou produto, mediante requisição expressa, de <br />
                  acordo com a regulamentação da autoridade nacional, e
                  observados os segredos comercial e industrial; <br />
                  8.1.6. Eliminação dos dados pessoais tratados com o
                  consentimento do titular, exceto nas hipóteses previstas na{" "}
                  <br />
                  Lei 13.709/2018; <br />
                  8.1.7. Informação das entidades públicas e privadas com as
                  quais a <strong>BOWE</strong> realizou uso compartilhado de{" "}
                  <br />
                  dados; <br />
                  8.1.8. Informação sobre a possibilidade de não fornecer
                  consentimento e sobre as consequências da negativa; <br />
                  8.1.9. Revogação do consentimento.
                </p>
              </div>

              <hr />

              <div className="ninth-topic">
                <h3>9. Segurança</h3>
                <p>
                  9.1. A <strong>BOWE</strong> tem o compromisso de preservar a
                  estabilidade, segurança e funcionalidade do site, por meio de{" "}
                  <br />
                  medidas técnicas compatíveis com os padrões internacionais e
                  pelo estímulo ao uso de boas práticas. Todavia <br />
                  nenhum site disponível na internet possui total garantia
                  contra invasões ilegais. Em casos em que terceiros não <br />
                  autorizados invadam o sistema de forma ilícita, a{" "}
                  <strong>BOWE</strong> diligenciará ao máximo para evitar
                  prejuízos aos <br />
                  Usuários e localizar os infratores, mas não se responsabiliza
                  pelos danos por eles causados.
                </p>
              </div>

              <hr />

              <div className="tenth-topic">
                <h3>10. Mudanças na política de privacidade</h3>
                <p>
                  10.1. A <strong>BOWE</strong> poderá unilateralmente adicionar
                  e/ou modificar qualquer cláusula contida nestas Políticas{" "}
                  <br />
                  de Privacidade. A versão atualizada valerá para o uso da
                  plataforma realizado a partir de sua publicação. A <br />
                  continuidade de acesso ou utilização do site, depois da
                  divulgação, confirmará a vigência das novas Políticas <br />
                  de Privacidade pelos Usuários.
                  <br />
                  <br />
                  10.2. Caso a mudança efetuada necessite de consentimento do
                  Usuário, será apresentada a opção de aceitar <br />
                  de forma livre, inequívoca e informada o novo texto ou de
                  recusá-lo. <br />
                  <br />
                  10.3. Caso o Usuário não esteja de acordo com a alteração,
                  poderá não fornecer consentimento para atos <br />
                  específicos ou poderá rescindir totalmente seu vínculo com a{" "}
                  <strong>BOWE</strong>. Essa rescisão não eximirá, no entanto,
                  o <br />
                  Usuário de cumprir com todas as obrigações assumidas sob as
                  versões precedentes das Políticas de <br />
                  Privacidade.
                </p>
              </div>

              <hr />

              <div className="eleventh-topic">
                <h3>11. Encarregado</h3>
                <p>
                  11.1 A <strong>BOWE</strong> indica como encarregada Sra.
                  Alice Mariana da Silva Reis, inscrita no CPF sob o número{" "}
                  <br />
                  116.110.976-57, com endereço eletrônico
                  privacidade@bowe.com.br, nos termos do art. 41 da Lei Geral de{" "}
                  <br />
                  Proteção de Dados Pessoais, para aceitar reclamações e
                  comunicações dos titulares e da Autoridade Nacional <br />
                  de Proteção de Dados, prestar esclarecimentos e adotar
                  providências
                </p>
              </div>

              <hr />

              <div className="twelfth-topic">
                <h3>12. Disposições gerais</h3>
                <p>
                  12.1. A <strong>BOWE</strong> dispõe de um texto específico
                  para regular os direitos, deveres, garantias e disposições
                  gerais: os <br />
                  Termos de Uso. Todos esses documentos integram
                  inseparavelmente estas Políticas de Privacidade.
                </p>
              </div>

              <hr />

              <div className="thirteenth-topic">
                <h3>13. Contato</h3>
                <p>
                  13.1. A <strong>BOWE</strong> disponibiliza os seguintes
                  canais para receber todas as comunicações que o Usuário
                  desejar <br />
                  fazer, qual seja: pelo e-mail{" "}
                  <a href="mailto:bowe@bowe.com.br">bowe@bowe.com.br</a>; pelo
                  chat disponível na plataforma; pelo telefone (34) <br />
                  3305-8885, disponível de Segunda à Sexta-Feira, das 08h00min
                  às 18h00min; e pelo endereço físico Avenida <br />
                  Belarmino Cotta Pacheco, nº 8, sala 1, Santa Mônica, cidade de
                  Uberlândia – MG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default pageWraper(PoliticasDePrivacidade, "light", "Bowe | Políticas de privacidade","https://www.bowe.com.br/politicas-de-privacidade/")
