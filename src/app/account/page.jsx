import React from 'react'
import './Account.css'
const Account = () => {
  return (
    <>
      <form action="">
        <h1>Account</h1>
        <div className="inputs">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='lastName'/>
        <input type="text" placeholder='fullName'  />
        <input type="text" placeholder='Password' />
        <input type="text" placeholder='Confirm Password'/>
        </div>
      </form>
    </>
  )
}

export default Account