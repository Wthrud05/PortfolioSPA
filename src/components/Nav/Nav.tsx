import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <Link to={'/'}>Home</Link>
      <Link to={'/projects'}>Projects</Link>
      <Link to={'/contacts'}>Contacts</Link>
    </div>
  )
}

export default Nav
