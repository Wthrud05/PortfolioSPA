import React, { FC, ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
  children?: ReactNode
  css?: {}
  cls?: string
}

const baseStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  height: '100%',
  padding: '0 10px',
}

const Container: FC<ContainerProps> = ({ children, css, cls }) => {
  return <div className={cls}>{children}</div>
}

export default Container
