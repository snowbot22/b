import React from 'react'

import ArticleBlack from '../../components/ArticleBlack'
import ArticleWhite from '../../components/ArticleWhite'
import CateringLogo from '../../assets/icons/catering-logo.webp'
import ContactButtons from '../../components/ContactButtons'
import Layout from '../../components/Layout'
import ServicesTemplate from '../../components/ServicesTemplate'
import Stock9 from '../../assets/images/stock--9.jpg'
import Stock10 from '../../assets/images/stock--10.jpg'
import Stock11 from '../../assets/images/stock--11.jpg'
import Stock12 from '../../assets/images/stock--12.jpg'
import Stock13 from '../../assets/images/stock--13.jpg'

function index() {

  //VARIABLES
  const list=[
    {
        name: "Meraki Eventos Sociales",
        link: "/meraki/merakiSocial"
    },
    {
        name: "Meraki Eventos Corporativos",
        link: "/meraki/merakiCorporativo"
    },
    {
        name: "Meraki Brunch",
        link: "/meraki/brunch"
    },
    {
        name: "Locaciones",
        link: "/meraki/locaciones"
    }
  ]

  return (
    <Layout>
         <ServicesTemplate image={Stock11} logo={CateringLogo} services={list} />
        <article className='article--2'>
          <p className='p--1'>
            En The Catering Co. nos especializamos en la organización de eventos sociales y corporativos,
            así como en la producción de conciertos y festivales. Contamos con un equipo de profesionales
            que se encargan de cada detalle para que tu evento sea todo un éxito.
          </p>
          <ContactButtons />
        </article>
        <article className='article--3'>
          <ArticleBlack 
            title="Meraki Eventos Sociales"
            text="Locaciones exluclusivas, catering de primer nivel y organización de eventos. Todo lo que necesitas para que tu evento sea todo un éxito."
            image={Stock9}
          />
          <ArticleWhite
            title="Meraki Eventos Corporativos"
            text="Relajate y disfruta de tu evento. Nosotros nos encargamos de cada detalle para que sea todo un éxito."
            image={Stock10}
          />
          <ArticleBlack
            title="Meraki Brunch"
            text="Disfruta de un delicioso brunch con tus amigos y familiares. Contamos con una amplia variedad de platillos para que disfrutes de un delicioso brunch."
            image={Stock12}
          />
          <ArticleWhite
            title="Locaciones Exclusivas"
            text="Ubicadas en Cumbaya y El Valle de los Chillos, nuestras locaciones son el lugar perfecto para tu evento."
            image={Stock13}
          />

        </article>
    </Layout>
  )
}

export default index