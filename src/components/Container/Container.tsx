import React, { FC, ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
  children?: ReactNode
  css: {}
}

const Container: FC<ContainerProps> = ({ children, css }) => {
  return (
    <div style={css} className={styles.Container}>
      {children}
    </div>
  )
}

export default Container
