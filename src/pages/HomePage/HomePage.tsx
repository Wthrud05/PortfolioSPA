import React, { FC } from 'react'
import Container from '../../components/Container/Container'
import styles from './HomePage.module.scss'
import bg from '../../assets/images/homepagebg.png'
import cv from '../../assets/cv.pdf'

const HomePage: FC = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.Top}>
        <Container cls={styles.Container}>
          <img className={styles.Image} src={bg} alt="homepage bg" />
          <div className={styles.Description}>
            <h1>
              Hi my name is <span>Alexander</span>
            </h1>
            <h3>a frontend developer</h3>
            <p>ready to create and improve</p>
            <button>
              <a href={cv} download="myCv">
                Download CV
              </a>
            </button>
          </div>
        </Container>
      </div>
      <div className={styles.Bot}>
        <Container cls={styles.ContainerSkills}>
          <div className={styles.Skills}>
            <h1>Skills</h1>
            <p>
              HTML, CSS, Git, Webpack JavaScript, TypeScript, ReactJS, Redux, NPM, TailwindCSS,
              NodeJS, MySQL, Jest
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HomePage
