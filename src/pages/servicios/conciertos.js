import React from 'react'

import CateringLogo from '../../assets/icons/catering-logo.webp'
import ContactButtons from '../../components/ContactButtons'
import Layout from '../../components/Layout'
import ServicesTemplate from '../../components/ServicesTemplate'
import Stock3 from '../../assets/images/stock--3.jpg'

function conciertos() {

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
        <ServicesTemplate
            image={Stock3}
            logo={CateringLogo}
            services={list}
            description="Conciertos"
        />
    </Layout>
  )
}

export default conciertos