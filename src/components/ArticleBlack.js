import React from 'react'

import * as ArticleBlackStyles from "../assets/css/modules/articleBlack.module.css";

function ArticleBlack( {title,text,image, button, btnText} ) {
  return (
    <section className={ArticleBlackStyles.container}>
        <div className={ArticleBlackStyles.text}>
            <h2 className='title--3--white'>
                <span>
                    {title}
                </span>
            </h2>
            <p className='p--2--white'>
                {text}
            </p>
        </div>
        <figure className={ArticleBlackStyles.figure}>
            <img src={image} className='img--large img--cover' alt="Servicios" />
        </figure>
    </section>
  )
}

export default ArticleBlack