import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFontAwesome,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFacebook,faTwitter,faInstagram, faFontAwesome)

export const Footer = () => {
  return (
    <div className='bg-dark text-center footer'>
  

  <FontAwesomeIcon className='fb ico' icon="fa-brands fa-facebook" />
    <FontAwesomeIcon className='tw ico' icon="fa-brands fa-twitter" />
    <FontAwesomeIcon className='in ico' icon="fa-brands fa-instagram" />
    

    </div>
  )
}

