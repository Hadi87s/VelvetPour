'use client'

import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  useGSAP(() => {
    const heroSplit = new SplitText('.title', {
      type: 'chars, words'
    })

    const paragraphSplit = new SplitText('.subtitle', {
      type: 'lines'
    })

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach(char => char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
      .to('.right-leaf', { y: 200 }, 0)
      .to('.left-leaf', { y: -200 }, 0)
      .to('.arrow', { y: 100 }, 0)

    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120% top' : 'bottom top'

    const v = videoRef.current
    if (!v) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: v,
        pin: true,
        start: startValue,
        end: endValue,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })

    const addTween = () => {
      tl.clear()
      v.currentTime = 0
      tl.to(v, { currentTime: v.duration || 0, ease: 'none' }, 0)
      ScrollTrigger.refresh()
    }

    if (v.readyState >= 1 && v.duration > 0) {
      addTween()
    } else {
      const onMeta = () => {
        addTween()
        v.removeEventListener('loadedmetadata', onMeta)
      }
      v.addEventListener('loadedmetadata', onMeta)
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <>
      <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>
        <img className='left-leaf' src='/images/hero-left-leaf.png' alt='left-leaf' />
        <img className='right-leaf' src='/images/hero-right-leaf.png' alt='right-leaf' />

        <div className='body'>
          <div className='content'>
            <div className=' space-y-5 hidden md:block'>
              <p>Cool. Crisp. Classics</p>
              <p className='subtitle'>
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className='view-cocktails'>
              <p className='subtitle'>
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes –
                designed to delight your senses.
              </p>
              <a href='#cocktails'>View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className='video absolute inset-0'>
        <video ref={videoRef} muted playsInline preload='auto' src='/videos/output.mp4' />
      </div>
    </>
  )
}

export default Hero
