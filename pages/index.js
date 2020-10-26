import Head from 'next/head'
import { useEffect, useState } from 'react'
import ReactGa from 'react-ga'

import App from './_app'
import css from './styles/home.module.css'
import Header from '../components/Header'
import Button from '../components/Button'

function Home() {
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    ReactGa.initialize('UA-181019846-3');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      console.log(currentScrollY);

      if (currentScrollY > 1) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>DashTrader</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
      </Head>

      <body>
        <Header fixed={fixedNav} />
        <section className={css.firstSection}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={css.ctaTexts}>
                  <h1><span>UM TRADER</span> EM OUTRO NÍVEL!</h1>
                  <p>OBTENHA INFORMAÇÕES VALIOSAS DAS SUAS OPERAÇÕES
                    E MULTIPLIQUE SEUS RESULTADOS.</p>
                  <Button text="INICIAR AGORA" link='http://app.dashtrader.com.br' />
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.firstImage}>
                  <img style={{ width: '500px', maxWidth: '100%' }} src="/images/firstSection.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={css.ctaTexts}>
                  <h4>DASH O QUÊ?</h4>
                  <h2>Dashboard Trader</h2>
                  <p>O DashTrader é o software de métricas e gerenciamento mais
                  robusto, poderoso, assertivo e direto do que qualquer outro
                  software ou planilha de Excel. Tudo isso de uma forma simples e
                  com uma usabilidade muito amigável!</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.dashDesktop}>
                  <img src="/images/dashDesktop.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={css.ctaTexts} style={{ height: 'auto' }}>
                  <h4>MÉTRICAS</h4>
                  <h2 style={{ marginBottom: '40px' }}>Poderosa análise de dados</h2>

                  <div className="row">
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img style={{ width: '100%' }} src="/images/cards/acomp.png" />
                        <p>Acompanhe o fechamento de cada mês
                        em um período de até 12 meses e veja sua
                          evolução de forma clara e linear</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img style={{ width: '100%' }} src="/images/cards/lucro-preju.png" />
                        <p>Saiba como está se saindo a cada período
                        e tenha uma visão mais clara do seus
                        lucros.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img style={{ width: '100%' }} src="/images/cards/metas.png" />
                        <p>Defina metas e acompanhe seu progresso
                        a cada operação.</p>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img style={{ width: '100%' }} src="/images/cards/horarios.png" />
                        <p>Saiba em quais horários você está tendo
                        melhores resultados e abuse deles!
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img style={{ width: '100%' }} src="/images/cards/semana.png" />
                        <p style={{ width: '81%' }}>Deixa eu te fazer uma pergunta: Qual é o
                        melhor dia da semana para operar?
                        Não sabe? Está esperando o que pra descobrir?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img style={{ width: '100%' }} src="/images/cards/outros.png" />
                        <p style={{ width: '81%' }}>No momento existem 9 métricas
                        disponíveis, e estamos sempre pensando
                        em mais possibilidades para oferecer um
                        melhor serviço para você!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={css.ctaTexts}>
                  <h4>CADASTRO SIMPLES</h4>
                  <h2>Cadastrando operações</h2>
                  <p>Você pode adicionar suas operações manualmente, cadastrando
                  um de cada vez enquanto opera ou fazer upload de um arquivo CSV
                  exportado pela IqOption como explicado na seção abaixo.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.dashDesktop}>
                  <img style={{ width: '450px' }} src="/images/addTrader.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={css.ctaTexts}>
                  <h4>FÁCIL IMPORTAÇÃO</h4>
                  <h2>IqOption -> DashTrader</h2>
                  <p>De forma muito simples e rápida você pode trazer os dados das
                  suas operações para dentro do DashTrader, basta ir na tela de
                  Histórico de Trading e baixar o CSV do período desejado com seus
                  dados!</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.dashDesktop}>
                  <img src="/images/iq.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={css.ctaTexts}>
                  <h4>TECNOLOGIA DE PONTA</h4>
                  <h2>Responsivo</h2>
                  <p>O DashTrader usa as melhores tecnologias disponíveis atualmente
                  e é claro, funciona perfeitamente em SmartPhones, Tablets e
                  Computadores com um layout flexível e adaptável.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.dashDesktop}>
                  <img src="/images/devices.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }} className={css.sectionFooter}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={css.ctaTexts} style={{ alignItems: 'center', height: 'auto' }}>
                  <h4>PREÇOS</h4>
                  <h2>Nossos planos</h2>

                  <div className="row" style={{ maxWidth: '830px', marginTop: '30px' }}>
                    <div className="col-md-6">
                      <div className={css.cardPriceContainer}>
                        <div className={css.cardPrice}>
                          <h5>Plano Gratuito</h5>
                          <p>Aproveite nossa fase de testes para usar o DashTrader sem custos</p>

                          <h4>GRÁTIS</h4>

                          <a href="http://app.dashtrader.com.br" target="_blank" className={css.createAccount}>Criar conta</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={css.cardPriceContainer}>
                        <div className={css.cardPrice}>
                          <h5>Plano Premium</h5>
                          <p>Em breve habilitaremos o plano premium e disponibilizaremos pra vocês</p>

                          <h4>R$ ??,00/mês</h4>

                          <a style={{ border: '1px solid #fff', background: 'transparent', color: '#fff' }}>Em breve</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </body>


    </>
  )
}

export default () => {
  return (
    <App Component={Home} />
  )
}