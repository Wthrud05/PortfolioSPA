import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/projects'}>Projects</Link>
      <Link to={'/contacts'}>Contacts</Link>
    </div>
  )
}

export default Nav
