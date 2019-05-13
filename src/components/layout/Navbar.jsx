import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

  return (
    <nav>
      <div className="container">
        <Link to='/' className="brand-logo">Pomodoro</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}



export default Navbar