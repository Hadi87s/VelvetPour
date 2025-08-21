'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Cocktails from '@/components/Cocktails'
import About from '@/components/About'
import Art from '@/components/Art'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  )
}

export default Home
