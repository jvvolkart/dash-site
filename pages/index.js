import Head from 'next/head'
import { useEffect, useState } from 'react'
import ReactGa from 'react-ga'

import App from './_app'
import css from './styles/home.module.css'
import Header from '../components/Header'
import Button from '../components/Button'
import { useWindowDimensions } from '../functions/utils'

function Home() {
  const [fixedNav, setFixedNav] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    ReactGa.initialize('UA-181019846-3');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
        <title>DashTrader - Gerenciamento trader melhor que planilha de excel!</title>
        <meta name="description" content="Melhore seu gerenciamento da forma mais simples e eficaz possível, melhor que qualquer planilha de excel!"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="robots" content="index,follow"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="DashTrader - Gerenciamento trader melhor que planilha de excel!" />
        <meta property="og:description" content="Melhore seu gerenciamento da forma mais simples e eficaz possível, melhor que qualquer planilha de excel!" />
        <meta property="og:image" content="https://dashtrader.com.br/images/dashDesktop.png" />
        <meta property="og:url" content="https://dashtrader.com.br" />
        <meta name="google-site-verification" content="h3zy4xIeYPC1kUOdwX_32b8YXIWqtyAHD5EuSS36cn0" />
      </Head>

      <body>
        <Header fixed={fixedNav} />
        <div className={css.whatsIcon}>
          <a href="https://api.whatsapp.com/send?phone=5548998589424" target="_blank">
            <img alt="whats logo" src="/images/whats.png" />
          </a>
        </div>
        <section className={css.firstSection} style={width < 769 ? { paddingTop: '100px', backgroundSize: '45%' } : {}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={css.ctaTexts}>
                  <h1><span>Um Trader</span> Em outro nível!</h1>
                  <p>Obtenha informações valiosas das suas operações
                    e multiplique seus resultados.</p>
                  <Button text="INICIAR AGORA" link='http://app.dashtrader.com.br/register' />
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.firstImage}>
                  <img alt="homem segurando celular" style={{ width: '500px', maxWidth: '100%' }} src="/images/firstSection.png" />
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
                  <p>O DashTrader é o <b>software de métricas e gerenciamento</b> mais
                  robusto, poderoso e direto do que qualquer planilha de Excel. Tudo isso de uma forma simples e
                  com uma ótima usabilidade!</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.dashDesktop}>
                  <img alt="dastrader dashboard" src="/images/dashDesktop.png" />
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
                        <img alt="grafico" style={{ width: '100%' }} src="/images/cards/acomp.png" />
                        <p>Acompanhe seu resultado nos últimos 12 meses e veja sua evolução mensal.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img alt="grafico" style={{ width: '100%' }} src="/images/cards/lucro-preju.png" />
                        <p>Monitore seus resultados por período.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img alt="grafico" style={{ width: '100%' }} src="/images/cards/metas.png" />
                        <p>Defina metas e acompanhe seu progresso
                        a cada operação.</p>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img alt="grafico" style={{ width: '100%' }} src="/images/cards/horarios.png" />
                        <p>Saiba em quais horários você está tendo
                        melhores resultados e faça melhor proveito deles!
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img alt="grafico" style={{ width: '95%' }} src="/images/cards/semana.png" />
                        <p style={{ width: '81%' }}>Quer saber qual é o melhor dia da semana para operar? Deixa com a gente!
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={css.card}>
                        <img alt="grafico" style={{ width: '100%' }} src="/images/cards/outros.png" />
                        <p style={{ width: '81%' }}>Ao todo são 9 métricas para você gerenciar suas operações da melhor forma possível!
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
                  <img alt="cadastre os trades" style={{ width: '450px' }} src="/images/addTrader.png" />
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
                  Histórico de Trading e baixar o CSV do período desejado!</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.dashDesktop}>
                  <img alt="importação da iqoption" src="/images/iq.png" />
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
                  <p>O DashTrader utiliza as melhores tecnologias disponíveis no mercado
                  e funciona perfeitamente em SmartPhones, Tablets e
                  Computadores com um layout flexível e adaptável.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={css.dashDesktop}>
                  <img alt="gerencie com responsividade" src="/images/devices.png" />
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
                          <h5>Acesso gratuito</h5>
                          <p>Aproveite nosso período de testes por <b>7 dias</b> e conheça o DashTrader <b>sem custos!</b></p>
                          <h4>GRÁTIS</h4>
                          <a href="http://app.dashtrader.com.br/register" target="_blank" className={css.createAccount}>CRIAR CONTA</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={css.cardPriceContainer}>
                        <div className={css.cardPrice}>
                          <h5>Plano premium</h5>
                          <p>Acesso a <b>todas</b> as funcionalidades, dashboards, upload de planilhas, <b>por apenas:</b></p>
                          <h4>R$ 19,90/mês</h4>
                          <a href="http://app.dashtrader.com.br/register" target="_blank" className={css.createAccount}>CRIAR CONTA</a>
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