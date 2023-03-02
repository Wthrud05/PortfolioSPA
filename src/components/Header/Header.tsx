import React from 'react'
import Container from '../Container/Container'
import Nav from '../Nav/Nav'
import styles from './Header.module.scss'

const Header = () => {
  const css = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  return (
    <div className={styles.Header}>
      <Container css={css}>
        <div className={styles.Title}>
          Personal <span>Portfolio</span>
        </div>
        <Nav />
      </Container>
    </div>
  )
}

export default Header
