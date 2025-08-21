import { cocktailLists, mockTailLists } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Cocktails = () => {
  useGSAP(() => {
    const pxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 90%',
        scrub: true
      }
    })

    pxTimeline.to('#c-left-leaf', { x: -100, y: 100 }).to('#c-right-leaf', { x: 100, y: 100 })
  }, [])

  return (
    <section id='cocktails' className='noisy'>
      <img src='/images/cocktail-left-leaf.png' alt='left-leaf' id='c-left-leaf' />
      <img src='/images/cocktail-right-leaf.png' alt='r-leaf' id='c-right-leaf' />

      <div className='list'>
        <div className='popular'>
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(c => (
              <li key={c.name}>
                <div className='md:me-28'>
                  <h3>{c.name}</h3>
                  <p>
                    {c.country} | {c.detail}
                  </p>
                  <span>- {c.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='loved'>
          <h2>Most popular mocktails:</h2>
          <ul>
            {mockTailLists.map(c => (
              <li key={c.name}>
                <div className='me-28'>
                  <h3>{c.name}</h3>
                  <p>
                    {c.country} | {c.detail}
                  </p>
                  <span>- {c.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails
