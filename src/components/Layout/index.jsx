import React from 'react'
import { Header } from '../Utils/Header'
import {Footer} from '../Utils/Footer'

export const Layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
