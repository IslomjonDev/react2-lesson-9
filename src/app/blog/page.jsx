import React from 'react'
import './Blog.css'
import Image from 'next/image'
import buss from '@/assets/https_/www.pexels.com/photo/two-women-in-front-of-dry-erase-board-1181533.png'
const Blog = () => {
  return (
    <> 
      <div className="blog">
         <div className="container">
            <div className="blog-title">
              <h1>Business</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <h2>Blog  Business</h2>
            </div>
         </div>
      </div>
      <div className="search">
         <div className="container">
           <input type="text" name="" id="" placeholder='searching ...' />
         </div>
      </div>
      <div className="business">
         <div className="container">
            <div className="business-cards">
              <div className="business-card">
                <Image alt='business' width={0} height={0} src={buss} />
                <span>
                  <h4>Business</h4>
                  <h2>Top 6 free website mockup tools 2022</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </span>
              </div>
              <div className="business-card">
                <Image alt='business' width={0} height={0} src={buss} />
                <span>
                  <h4>Business</h4>
                  <h2>Step-by-step guide to choosing great font pairs</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </span>
              </div>
              <div className="business-card">
                <Image alt='business' width={0} height={0} src={buss} />
                <span>
                  <h4>Business</h4>
                  <h2>Ten free foogle fonts that you should use</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </span>
              </div>
              <div className="business-card">
                <Image alt='business' width={0} height={0} src={buss} />
                <span>
                  <h4>Business</h4>
                  <h2>What did I learn from doing 50+ design sprints?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </span>
              </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Blog