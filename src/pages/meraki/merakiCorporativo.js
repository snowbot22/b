import React from 'react'

import CateringLogo from '../../assets/icons/catering-logo.webp'
import ContactButtons from '../../components/ContactButtons'
import Layout from '../../components/Layout'
import ServicesTemplate from '../../components/ServicesTemplate'
import Stock11 from '../../assets/images/stock--11.jpg'

function merakiCorporativo() {

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
        <ServicesTemplate
            image={Stock11}
            logo={CateringLogo}
            services={list}
            description="Meraki Eventos Corporativos"
        />
    </Layout>
  )
}

export default merakiCorporativo