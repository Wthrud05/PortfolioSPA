import React, { FC } from 'react'
import { links } from '../../assets/data'
import styles from './Nav.module.scss'
import CustomLink from '../CustomLink/CustomLink'

const Nav: FC = () => {
  return (
    <div className={styles.Nav}>
      {links.map((link) => {
        return <CustomLink key={link.id} name={link.name} path={link.path} />
      })}
    </div>
  )
}

export default Nav
