import React from 'react'

import * as ArticleWhiteStyles from "../assets/css/modules/articleWhite.module.css";

function ArticleWhite( {title,text,image, button, btnText} ) {
  return (
    <section className={ArticleWhiteStyles.container}>
        <div className={ArticleWhiteStyles.text}>
            <h2 className='title--3'>
                <span>
                    {title}
                </span>
            </h2>
            <p className='p--3'>
                {text}
            </p>
        </div>
        <figure className={ArticleWhiteStyles.figure}>
            <img src={image} className='img--large img--cover' alt="Servicios" />
        </figure>
    </section>
  )
}

export default ArticleWhite