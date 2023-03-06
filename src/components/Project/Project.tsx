import React, { FC } from 'react'
import { IProject } from '../../assets/types'
import styles from './Project.module.scss'
import { useParams, useNavigate } from 'react-router-dom'

interface ProjectProps {
  project: IProject
  getIdHandler: (id: number) => void
}

const Project: FC<ProjectProps> = ({ project, getIdHandler }) => {
  const navigate = useNavigate()

  const openProjectPageHandler = (): void => {
    navigate('/projects/' + project.id)
    getIdHandler(project.id)
  }

  return (
    <div onClick={openProjectPageHandler} className={styles.Project}>
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
    </div>
  )
}

export default Project
