import React from 'react'
import './About.css'
import Image from 'next/image'
import team1 from '@/assets/about1.png'
import team2 from '@/assets/about2.png'

const About = () => {
  return (
    <>
     <div className="about">
        <div className="container">
          <div className="about-content">
             <div className="about-left">
               <h2>Our mision</h2>
               <h1>Creating valuable content for creatives all around the world</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
             </div>
             <div className="about-left">
               <h2>Our Vision</h2>
               <h1>A platform that empowers individuals to improve</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
             </div>
          </div>
          <div className="teams1">
             <div className="teams1-left">
               <h2>Our team of creatives</h2>
               <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
             </div>
             <div className="teams1-right">
               <Image alt='team' width={0} height={0} src={team1}/>
             </div>
          </div>
          <div className="teams1">
             <div className="teams2-left">
                <Image alt='team2' width={0} height={0} src={team2}/>
             </div>
             <div className="teams1-left">
               <h2>Our team of creatives</h2>
               <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
             </div>
          </div>
        </div>
    
     </div>
    </>
  )
}

export default About