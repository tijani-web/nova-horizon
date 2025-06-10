import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeContent = () => {

  useGSAP(() =>{
    gsap.fromTo('.home', 
       { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    )
  })
  return (
    <div className="home-content">
        <div className="home-text">
          <div className='subheading home'>SO, YOU WANT TO TRAVEL TO</div>
          <h1 className='home'>SPACE</h1>
          <p className='home'>  Let’s face it; if you want to go to space, you might as well genuinely go to 
               outer space and not hover kind of on the edge of it. Well sit back, and relax 
               because we’ll give you a truly out of this world experience!</p>
        </div>
      <NavLink to={`/destination`} className="explore home" style={{
        textDecoration: 'none'
      }}>
            <div className="subheading">EXPLORE</div>
        </NavLink>
    </div>
  )
}

export default HomeContent