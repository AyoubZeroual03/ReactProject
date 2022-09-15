import React from 'react'
import { Layout } from '../../components/Layout'
import { Ourproducts } from '../../components/Homepage/Ourproducts'
import { Hero } from '../../components/Homepage/Hero'


export const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Ourproducts />
      </Layout >
    </div>
  )
}
