import * as React from "react"

import Form from '../components/Form';
import Stock2 from '../assets/images/stock--2.jpg';
import Layout from '../components/layout'
import {BsWhatsapp} from "react-icons/bs";
import * as ContactoStyle from '../assets/css/modules/contacto.module.css';
import "../assets/css/global.css"


function contacto() {
  return (
    <Layout>
         <article className={ContactoStyle.info}>
            <section className={ContactoStyle.info__text}>
                <h2 className={`title--3 `}>Contacto</h2>
                <p >
                  Aqui encontraras todos nuestros datos de contacto, estaremos encantados de atenderte. 
                </p>
                <div className={ContactoStyle.info__text__container}>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Teléfono:</h3>
                    <p> 123456789 </p>
                  </div>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Correo Electrónico:</h3>
                    <p>
                      <a className='link--reset--black' href="mailto:cateringCo@gmail.com
                      ">
                        abc@sass.com
                      </a>
                    </p>
                  </div>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Whatsapp:</h3>
                    <p>
                      Si deseas contactarnos por whatsapp, puedes hacerlo a través de este enlace. Y un Event Planner se contactará contigo lo más pronto posible.
                    </p>
                    <button className="button--green">
                      <a className="link--icon--white link--reset" href="https://api.whatsapp.com/send?phone=593982555079">
                        <BsWhatsapp/> Deseo información
                      </a>
                    </button>
                  </div>
                </div>
            </section>
            <figure>
                <img className="img--large" src={Stock2} alt="Contacto" />
            </figure>
        </article>
        <Form />
    </Layout>
  )
}

export default contacto