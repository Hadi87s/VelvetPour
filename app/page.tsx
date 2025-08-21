'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Cocktails from '@/components/Cocktails'
import About from '@/components/About'
import Art from '@/components/Art'
import Menu from '@/components/Menu'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  )
}

export default Home
