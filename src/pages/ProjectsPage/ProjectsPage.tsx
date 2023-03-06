import React, { FC } from 'react'
import Container from '../../components/Container/Container'
import Projects from '../../components/Projects/Projects'
import styles from './ProjectsPage.module.scss'

interface ProjectPageProps {
  getIdHandler: (id: number) => void
}

const ProjectsPage: FC<ProjectPageProps> = ({ getIdHandler }) => {
  return (
    <div className={styles.ProjectsPage}>
      <Container cls={styles.Container}>
        <div className={styles.TitleBox}>
          <h1 className={styles.Title}>Projects</h1>
        </div>
        <Projects getIdHandler={getIdHandler} />
      </Container>
    </div>
  )
}

export default ProjectsPage
