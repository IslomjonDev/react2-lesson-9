import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import './Header.css'
import logo from '@/assets/Logo.png'
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
         <div className="navbar">
            <div className="navlogo">
              <Link href={'/'}>
                <Image src={logo} alt='logo' width={0} height={0}  />
              </Link>
            </div>
            <div className="nav-list">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/account'}>Account</Link>
                <button>Login</button>
            </div>
         </div>
        </div>
      </header>
    </>
  )
}

export default Header