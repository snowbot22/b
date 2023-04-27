import * as React from "react"
import { Link } from "gatsby"

import ArticleBlack from "../components/ArticleBlack"
import ContactButtons from "../components/ContactButtons"
import Food1 from "../assets/images/food--1.jpg"
import MainSlider from "../components/MainSlider"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SliderTimer from "../components/SliderTimer"
import Stock1 from "../assets/images/stock--1.jpg"
import * as IndexStyles from "../assets/css/modules/index.module.css";
import "../assets/css/global.css"


const IndexPage = () => (
  <Layout>
    <MainSlider 
      text="Somos Planificadores, diseñadores, catering de eventos sociales. corporativos y conciertos"
      buttonText="Cotiza"
    />
    <article className="article--1"> 
      <h2 className="title--1 lines">
        <span>
          ¡Creemos Momentos Inolvidables!
        </span>
      </h2>
      <p className="p--1">
        En The Catering Co. estos 11 años nos hemos especializado en la organización de todo tipo eventos y somos un aliado estratégico para nuestros clientes en nuestras divisiones Catering y Hotel, 
        ofreciendo soluciones integrales para la realización de todo tipo de eventos.
      </p>
      <p className="subtitle--1">
        Contáctanos y empezemos a crear juntos tu evento soñado.
      </p>
      <ContactButtons />
    </article>
    <ArticleBlack 
      title="Nuestro Personal"
      text="Nuestro personal está altamente capacitado para brindar un servicio de calidad y excelencia"
      image={Stock1}
    />
    <article className="article--1">
      <h2 className="title--1 lines">
        <span>
          Catering de Primer Nivel
        </span>
      </h2>
      <div className={IndexStyles.food__container}>
        <figure className={IndexStyles.food__figure}>
          <img src={Food1} className="img--large img--cover" alt="Servicios" />
        </figure>
        <p className="p--2 center">
          Disfruta del mejor menu para tu evento, con la mejor calidad y sabor,
          con los mejores ingredientes y el mejor servicio.
        </p>
      </div>
    </article>
    <article className={`${IndexStyles.meraki__container} article--1`}>
      <div className={IndexStyles.meraki__slider}>
        <SliderTimer />
      </div>
      <div className={IndexStyles.meraki__text}>
        <h2 className='title--1--white lines--white'>
            <span>Meraki Brunch & Events</span>
        </h2>
        <p className="p--2--white">
            Creamos Meraki Brunch & Events para elevar tus eventos sociales al siguiente nivel. Te ofrecemos una experiencia gastronómica única, con un servicio de calidad y locaciones exclusivas.
        </p>
        <button className="button--white">
            <Link to="/meraki" className="link--button--black link--reset">
              Saber Más
            </Link>
        </button>
      </div>
    </article>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

export default IndexPage
