import React from 'react'

import ArticleBlack from '../../components/ArticleBlack'
import ArticleWhite from '../../components/ArticleWhite'
import CateringLogo from '../../assets/icons/catering-logo.webp'
import ContactButtons from '../../components/ContactButtons'
import Layout from '../../components/Layout'
import ServicesTemplate from '../../components/ServicesTemplate'
import Stock3 from '../../assets/images/stock--3.jpg'
import Stock4 from '../../assets/images/stock--4.jpg'
import Stock6 from '../../assets/images/stock--6.jpg'
import Stock7 from '../../assets/images/stock--7.jpg'
import Stock8 from '../../assets/images/stock--8.jpg'

function index() {

   //VARIABLES
   const list=[
    {
        name: "Eventos Sociales",
        link: "/servicios/eventosSociales"
    },
    {
        name: "Eventos Corporativos",
        link: "/servicios/eventosCorporativos"
    },
    {
        name: "Conciertos",
        link: "/servicios/conciertos"
    },
    {
        name: "Quintas Recomendadas",
        link: "/servicios/quintas"
    }
  ]  

  return (
    <Layout>
        <ServicesTemplate image={Stock3} logo={CateringLogo} services={list} />
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
            title="Eventos Sociales"
            text="Disfruta de tus celebraciones privadas sin preocuparte por nada. Nosotros nos encargamos de todo para que tú y tus invitados disfruten de una experiencia inolvidable."
            image={Stock4}
          />
          <ArticleWhite
            title="Eventos Corporativos"
            text="Impresiona a tus clientes y colaboradores con eventos corporativos de primer nivel. Nosotros nos encargamos de la organización y producción de tu evento para que tú solo te preocupes por disfrutarlo."
            image={Stock6}
          />
          <ArticleBlack
            title="Conciertos"
            text="Organiza conciertos y festivales de primer nivel con nosotros. Contamos con un equipo de profesionales que se encargan de cada detalle para que tu evento sea todo un éxito."
            image={Stock7}
          />
          <ArticleWhite
            title="Quintas Recomendadas"
            text="Contamos con una amplia variedad de quintas para que elijas la que más se adapte a tus necesidades. Todas nuestras quintas cuentan con los servicios de catering y organización de eventos de The Catering Co."
            image={Stock8}
          />

        </article>
        
    </Layout>
  )
}

export default index