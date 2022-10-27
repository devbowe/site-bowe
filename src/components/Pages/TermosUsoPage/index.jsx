import React from "react"
import pageWraper from "../../default/pageWrapper"
import { MenuNav, Footer, Spacing, Typography, Video } from "../../index"
import { BannerContainer, Flex } from "../styled"
import scrollTo from "gatsby-plugin-smoothscroll"
import * as S from "./styled"
import "./termosUsoPage.css"

const TermosUso = () => {
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
                TERMO DE USO
              </Typography>
              <Typography type="h2" color="primary" width="100%">
                Para você <br />
                entender melhor <br />
                como funciona <br />
                este site
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
                  Termos de uso
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
                  3. Objetivo do site
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".fourth-topic")
                  }}
                >
                  4. Restrições ao usuário
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".fifth-topic")
                  }}
                >
                  5. Isenção de responsabilidade da bowe
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".sixth-topic")
                  }}
                >
                  6. Direitos de propriedade intelectual do controlador do site
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".seventh-topic")
                  }}
                >
                  7. Desdobramentos do acesso ao site
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".eighth-topic")
                  }}
                >
                  8. Mudanças nos termos de uso
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".ninth-topic")
                  }}
                >
                  9. Dados pessoais, privacidade e segurança
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".tenth-topic")
                  }}
                >
                  10. Lei aplicável e foro de eleição
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo(".eleventh-topic")
                  }}
                >
                  11. Contato
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
                ser lidos de forma bem completa e detalhada nos{" "}
                <strong>Termos de Uso a seguir.</strong>
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
                <strong>1.</strong> Somos uma empresa especializada em marketing
                estratégico, branding, publicidade, propaganda, presença
                digital, inbound marketing e design, mas aqui nós apenas
                divulgamos informações que acreditamos ser importantes sobre os
                nossos serviços, esclarecemos dúvidas dos Usuários e expomos
                vagas.
                <br />
                <br />
                <strong>2.</strong> Você não precisa pagar nada para usar o
                nosso site.
                <br />
                <br />
                <strong>3.</strong> Nos esforçamos bastante para que o nosso
                site seja seguro, mas ainda assim recomendamos que, antes de{" "}
                <br />
                baixar qualquer conteúdo, você instale antivírus e programas de
                proteção.
                <br />
                <br />
                <strong>4.</strong> Nossos Termos de Uso poderão mudar, mas você
                sempre poderá acessar a versão mais atualizada no nosso <br />
                site. Além disso, se formos realizar alguma ação que a lei exija
                sua autorização, você receberá um aviso antes <br />
                para poder aceitar ou recusar.
                <br />
                <br />
                <strong>5.</strong> Temos uma Política de Privacidade que trata
                sobre o que fazemos com os seus dados pessoais. É muito <br />
                importante que você leia e entenda esse documento também!
                <br />
                <br />
                <strong>6.</strong> Os Termos de Uso a seguir estão divididos da
                seguinte forma para facilitar o seu acesso à informação: <br />
                a) Data de Disponibilização do Texto; <br />
                b) Explicação dos Termos Técnicos ou em Língua Estrangeira;{" "}
                <br />
                c) Objetivo do Site; <br />
                d) Restrições ao Usuário; <br />
                e) Isenção de Responsabilidade da BOWE; <br />
                f) Direitos de Propriedade Intelectual do Controlador do Site;{" "}
                <br />
                g) Desdobramentos do Acesso ao Site; <br />
                h) Mudanças nos Termos de Uso; <br />
                i) Dados Pessoais, Privacidade e Segurança; <br />
                j) Lei Aplicável e Foro de Eleição; <br />
                k) Contato.
              </p>
              <hr />

              <div className="intro-topic" id="politica">
                <h3>Termos de uso</h3>
                <p>
                  O site denominado <strong>“BOWE”</strong>, cujo domínio é www.bowe.com.br, é de
                  propriedade, mantido e controlado pela <br />
                  <strong>BOWE LTDA - ME</strong>, pessoa jurídica constituída
                  na forma de sociedade empresária Limitada, inscrita no <br />
                  CNPJ sob o nº 19.463.933/0001-43, com sede na Avenida
                  Belarmino Cotta Pacheco, nº 8, sala 1, Santa Mônica, <br />
                  cidade de Uberlândia, estado de Minas Gerais.
                  <br />
                  <br />
                  Este documento visa prestar informações sobre o modo de
                  utilização do site, suas ferramentas, condições <br />, além
                  de explicar os direitos e deveres dos Usuários e está em
                  conformidade com a Lei nº 12.965/2014 (Marco <br /> Civil da
                  Internet) e com a Lei nº 13.709/2018 (Lei de Proteção de Dados
                  Pessoais).
                  <br />
                  <br />
                  Alertamos que todo o texto deve ser lido com atenção e, caso
                  você (também chamado de <strong>“Usuário”</strong>) não <br />
                  concorde com o conteúdo de nossos Termos de Uso e/ou Políticas
                  de Privacidade, não dê prosseguimento a <br />
                  navegação. Recomendamos, ainda, caso seja aceito, que você
                  armazene ou imprima uma cópia deste <br />
                  contrato, incluindo todas as políticas.
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
                  2. Explicação dos termos técnicos ou <br />
                  em língua estrangeira
                </h3>
                <p>
                  Abaixo estão dispostos os significados das nomenclaturas
                  técnicas e termos na língua inglesa.
                  <br />
                  <br />
                  Download: Transferência de arquivo de um determinado servidor
                  para o computador do Usuário. <br />
                  Vírus: Software malicioso que infecta sistemas e computadores,
                  com objetivo de causar algum dano, faz cópias de si mesmo e
                  tenta se espalhar para outros computadores, utilizando-se de
                  diversos meios.
                </p>
              </div>

              <hr />

              <div className="third-topic">
                <h3>3. Objetivo do site</h3>
                <p>
                  3.1. O site <strong>BOWE</strong> consiste em uma plataforma eletrônica para
                  <strong>divulgar</strong> os serviços de Marketing Estratégico, <br />Branding,
                  Publicidade & Propaganda, Presença Digital, Inbound Marketing,
                  Design, entre outros, oferecidos pela <br /><strong>BOWE</strong>, assim como
                  esclarecer dúvidas dos Usuários e expor vagas.
                  <br/>
                  <br/>
                  3.2. Não são prestados os serviços do item anterior pelo site.
                  <br/>
                  <br/>
                  3.3. A plataforma tem o objetivo de trazer soluções rápidas para os Usuários, construindo relacionamentos, com <br />um atendimento personalizado
                  <br/>
                  <br/>
                  3.4. Não são cobrados valores pela utilização do site.
                </p>
              </div>

              <hr />

              <div className="fourth-topic">
                <h3>4. Restrições ao usuário</h3>
                <p>
                    4.1. Os Usuários <span className="underscore"><strong>não</strong></span> podem: <br/>
                    4.1.1. Lesar direitos da <strong>BOWE</strong>, dos operadores do site, de terceiros ou agir sob qualquer meio ou forma que <br/>
                    possa contribuir com tal violação;<br/>
                    4.1.2. Executar atos que limitem ou impeçam a utilização do site ou acessar ilicitamente o site;<br/>
                    4.1.3. Utilizar a ferramenta para praticar ações ilícitas e difundir mensagens não relacionadas com o site ou com <br/>
                    suas finalidades, incluindo mensagens com conteúdo ilícito e impróprio;<br/>
                    4.1.4. Inserir dados que sejam falsos, desatualizados ou incompletos;
                    <br/>
                    <br/>
                    4.2. Ao sinal de qualquer descumprimento de conduta, o acesso do Usuário ao site poderá ser bloqueado.
                </p>
              </div>

              <hr />

              <div className="fifth-topic">
                <h3>
                  5. Isenção de responsabilidade da Bowe
                </h3>
                <p>
                    5.1. A <strong>BOWE</strong> não se responsabiliza por: <br/>
                    5.1.1. Eventual indisponibilidade da plataforma, a qual não tenha dado causa. <br/>
                    5.1.2. Condutas dos Usuários e pelo descumprimento de suas obrigações. <br/>
                    5.1.3. Inserção de informações falsas pelos Usuários; <br/>
                    5.1.4. Danos que o Usuário possa experimentar por ações exclusivas de terceiros, bem como falhas na conexão <br/>
                    de rede e interações maliciosas como vírus. <br/>
                    5.1.5. Danos que o Usuário possa ter em decorrência do mau uso da plataforma em desconformidade com estes <br/>
                    Termos, com a Política de Privacidade, com a lei ou ordens judiciais. <br/>
                    5.1.6. Casos fortuitos ou de força maior.
                </p>
                
              </div>

              <hr />

              <div className="sixth-topic">
                <h3>6. Direitos de propriedade intelectual do controlador do site</h3>
                <p>
                    6.1. A titularidade e os direitos relativos ao site pertencem exclusivamente à <strong>BOWE</strong>. O acesso e a sua regular <br/>
                    utilização pelo Usuário não lhe conferem qualquer direito ou prerrogativa sobre propriedade intelectual ou <br/>
                    outro conteúdo nele inserido.
                    <br/>
                    <br/>
                    6.2. Todo o conteúdo da plataforma, incluindo a marca, logo, domínio, bases de dados, arquivos, textos, <br/>
                    desenhos, fotos, layouts, cabeçalhos e demais elementos, foi criado, desenvolvido ou cedido à <strong>BOWE</strong>, sendo, <br/>
                    portanto, de propriedade exclusiva da <strong>BOWE</strong> ou a ela licenciado e encontra-se protegido pelas leis brasileiras <br/>
                    e tratados internacionais que versam sobre direitos de propriedade intelectual, como a Lei n. 9.610/98.
                    <br/>
                    <br/>
                    6.3. O Usuário não está autorizado a utilizar, sob qualquer forma ou pretexto, a marca, suas variações, domínios <br/>
                    e sinais que sejam da <strong>BOWE</strong> ou estiverem expostos no site.
                    <br/>
                    <br/>
                    6.4. São proibidas: a reprodução, integral ou parcial, exploração, cessão, imitação, cópia, plágio, <br/>
                    armazenamento, alteração, modificação de características, venda, doação, alienação e transferência, de <br/>
                    qualquer conteúdo do site. <br/>
                    6.4.1. A reprodução de nossos conteúdos para fins informativos e educacionais poderá ser permitida, desde que <br/>
                    solicitada a nossa autorização expressa.
                    <br/>
                    <br/>
                    6.5. O Usuário que violar as proibições contidas na legislação sobre propriedade intelectual e nestes Termos <br/>
                    será responsabilizado, civil e criminalmente, pelas infrações cometidas, além de poder ser impedido de acessar <br/>
                    o site.
                </p>
              </div>

              <hr />

              <div className="seventh-topic">
                <h3>7. Desdobramentos do acesso ao site</h3>
                <p>
                    7.1. Apesar dos melhores esforços da <strong>BOWE</strong> para fornecer acesso seguro aos Usuários, em virtude de <br/>
                    dificuldades técnicas, aplicações de internet ou problemas de transmissão, é possível ocorrer cópias inexatas <br/>
                    ou incompletas das informações contidas no site. <br/>
                    <br/>
                    7.2. Atos ilícitos cometidos por terceiros e fora do nosso alcance também podem ocorrer, como invasões não <br/>
                    autorizadas e ações de hackers. Além disso, vírus de computador e outros programas danosos também <br/>
                    poderão ser baixados inadvertidamente no site. <br/>
                    <br/>
                    7.3. Assim, a <strong>BOWE</strong> recomenda a instalação de antivírus e protetores adequados no seu computador <br/>
                    ou smartphone antes da utilização ou navegação no site e do download de qualquer material nele contido. <br/>
                    <br/>
                    7.4. A <strong>BOWE</strong> se reserva o direito de unilateralmente modificar o site, bem como a configuração, a <br/>
                    apresentação, o conteúdo, as funcionalidades, as ferramentas ou qualquer outro elemento, inclusive o seu <br/>
                    cancelamento.
                </p>
              </div>

              <hr />

              <div className="eighth-topic">
                <h3>8. Mudanças nos termos de uso</h3>
                <p>
                    8.1. A <strong>BOWE</strong> poderá unilateralmente adicionar e/ou modificar qualquer cláusula contida nestes Termos de <br/>
                    Uso. A versão atualizada valerá para o uso da plataforma realizado a partir de sua publicação. A continuidade <br/>
                    de acesso ou utilização do site, depois da divulgação, confirmará a vigência dos novos Termos de Uso <br/>
                    pelos Usuários. <br/>
                    <br/>
                    8.2. Caso a mudança efetuada necessite de consentimento do Usuário, será apresentada a opção de aceitar de <br/>
                    forma livre, inequívoca e informada o novo texto ou de recusá-lo. <br/>
                    <br/>
                    8.3. Caso o Usuário não esteja de acordo com a alteração, poderá não fornecer consentimento para atos <br/>
                    específicos ou poderá rescindir totalmente seu vínculo com a <strong>BOWE</strong>. Essa rescisão não eximirá, no entanto, o <br/>
                    Usuário de cumprir com todas as obrigações assumidas sob as versões precedentes dos Termos de Uso.
                </p>
              </div>

              <hr />

              <div className="ninth-topic">
                <h3>9. Dados pessoais, privacidade e segurança</h3>
                <p>
                    9.1. O site <strong>BOWE</strong> dispõe de uma política específica para regular a coleta, guarda, utilização e tratamento de <br/>
                    dados pessoais, bem como a sua segurança: a Política de Privacidade. Essa política específica integra <br/>
                    inseparavelmente estes Termos de Uso, ressaltando que os dados serão arquivados nos termos da legislação <br/>
                    em vigor.
                </p>
              </div>

              <hr />

              <div className="tenth-topic">
                <h3>10. Lei aplicável e foro de eleição</h3>
                <p>
                    10.1. O site é controlado pela <strong>BOWE</strong> na cidade de Uberlândia, Minas Gerais, Brasil, podendo ser acessado por <br/>
                    qualquer dispositivo conectado à Internet, independentemente de sua localização geográfica. <br/>
                    <br/>
                    10.2. O Usuário concorda que a legislação aplicável para fins destes Termos de Uso e das Políticas de <br/>
                    Privacidade será a vigente na República Federativa do Brasil. <br/>
                    <br/>
                    10.3. A <strong>BOWE</strong> e o Usuário concordam que o foro da cidade Uberlândia, Minas Gerais, Brasil, será o único <br/>
                    competente para dirimir qualquer questão ou controvérsia oriunda ou resultante do uso do site.
                </p>
              </div>

              <hr />

              <div className="eleventh-topic">
                <h3>11. Contato</h3>
                <p>
                    11.1. A <strong>BOWE</strong> disponibiliza os seguintes canais para receber todas as comunicações que o Usuário desejar <br/>
                    fazer, qual seja: pelo e-mail bowe@bowe.com.br; pelo chat disponível na plataforma; pelo telefone (34) <br/>
                    3305-8885, disponível de Segunda à Sexta-Feira, das 08h00min às 18h00min; e pelo endereço físico Avenida <br/>
                    Belarmino Cotta Pacheco, nº 8, sala 1, Santa Mônica, cidade de Uberlândia – MG.
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

export default pageWraper(TermosUso, "light", "Bowe | Termos de uso", "https://www.bowe.com.br/termos-uso/")
