import React, { ReactElement, SVGProps } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import styles from './Footer.module.scss'
import Github from '../Icons/Github'
import Vk from '../Icons/Vk'
import Telegram from '../Icons/Telegram'

const Footer = () => {
  const css = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  return (
    <div className={styles.Footer}>
      <Container cls={styles.Container}>
        <div className={styles.Social}>
          <Link target={'_blank'} to={'https://github.com/Wthrud05'}>
            <Github className={styles.Icon1} />
          </Link>
          <Link target={'_blank'} to={'https://vk.com/provider1'}>
            <Vk className={styles.Icon2} />
          </Link>
          <Link target={'_blank'} to={'https://t.me/LoAlexander'}>
            <Telegram className={styles.Icon2} />
          </Link>
        </div>
        <span className={styles.Owner}>Alexander Lobykin 2023 ©</span>
      </Container>
    </div>
  )
}

export default Footer
