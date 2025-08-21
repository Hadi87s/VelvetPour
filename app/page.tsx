'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <main className=''>
      <Navbar />
      <Hero />
      <div className='h-screen bg-black'></div>
    </main>
  )
}

export default Home
