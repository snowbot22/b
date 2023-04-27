import React from 'react';
import { Link } from 'gatsby';

import {BsWhatsapp} from "react-icons/bs";
import * as ContactButtonsStyles from "../assets/css/modules/contactButtons.module.css";


function ContactButtons() {
  return (
    <div className={ContactButtonsStyles.services__buttons}>
            <button className="button--black"> 
              <Link className="link--button--white link--reset" to="/contacto">Cotiza tu Evento</Link>
            </button>
            <span>
              O
            </span>
            <button className="button--green">
              <a href='https://api.whatsapp.com/send?phone=593982555079' className="link--icon--white link--reset"> <BsWhatsapp/> Escribenos</a>
            </button>
    </div>
  )
}

export default ContactButtons