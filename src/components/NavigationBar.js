import React from 'react'
import { Link } from 'gatsby'

import * as ServicesBarStyle from "../assets/css/modules/navigationBar.module.css"

function ServicesBar({Services}) {
  
    
  return (
    <article className={ServicesBarStyle.services__bar}>
            <ul className={`${ServicesBarStyle.services__bar__ul} ul--reset`} >
                {Services.map((service,index)=>{
                    return <li key={"li" + index}>
                                <Link to={service.link} className="link--button--white--20rem link--reset" key={service + index} activeClassName={ServicesBarStyle.link__active}> 
                                    {service.name}
                                </Link>
                           </li>
                })}
            </ul>
    </article>
  )
}

export default ServicesBar