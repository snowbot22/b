import React from 'react'

import CateringLogo from '../../assets/icons/catering-logo.webp'
import ContactButtons from '../../components/ContactButtons'
import Layout from '../../components/Layout'
import ServicesTemplate from '../../components/ServicesTemplate'
import Stock5 from '../../assets/images/stock--5.jpg'

function quintas() {

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
            image={Stock5}
            logo={CateringLogo}
            services={list}
            description="Quintas Recomendadas"
        />
    </Layout>
  )
}

export default quintas