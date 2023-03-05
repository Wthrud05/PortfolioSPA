import React, { FC, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CustomLink.module.scss'

interface CustomLinkProps {
  name: string
  path: string
}

const CustomLink: FC<CustomLinkProps> = ({ path, name }) => {
  return (
    <NavLink
      className={({ isActive }: any) => (isActive ? styles.Active : styles.CustomLink)}
      to={path}
    >
      {name}
    </NavLink>
  )
}

export default CustomLink
