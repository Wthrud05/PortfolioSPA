import React from 'react'
import Nav from '../Nav'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.Header}>
      Header
      <Nav />
    </div>
  )
}

export default Header
