import React, { FC } from 'react'
import Project from '../Project/Project'
import styles from './Projects.module.scss'
import { projects } from '../../assets/data'
import Container from '../Container/Container'

interface ProjectsProps {
  getIdHandler: (id: number) => void
}

const Projects: FC<ProjectsProps> = ({ getIdHandler }) => {
  return (
    <div className={styles.Projects}>
      <Container cls={styles.Container}>
        {projects.map((project) => {
          return <Project getIdHandler={getIdHandler} project={project} key={project.id} />
        })}
      </Container>
    </div>
  )
}

export default Projects
