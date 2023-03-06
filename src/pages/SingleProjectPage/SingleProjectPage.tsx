import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProject } from '../../assets/types'
import Container from '../../components/Container/Container'
import Back from '../../components/Icons/Back'
import Github from '../../components/Icons/Github'
import styles from './SingleProjectPage.module.scss'

interface SingleProjectProps {
  project: IProject
}

const SingleProjectPage: FC<SingleProjectProps> = ({ project }) => {
  const navigate = useNavigate()

  const backHandler = () => {
    navigate('/projects')
  }

  return (
    <div className={styles.Project}>
      <Container cls={styles.Container}>
        <button onClick={backHandler}>
          <Back className={styles.Back} />
        </button>
        <div className={styles.TitleBox}>
          <h1 className={styles.Title}>{project?.name}</h1>
        </div>
        <div className={styles.ImageBox}>
          <img src={project?.image} alt={project?.name} />
        </div>
        <div className={styles.ProjectDesc}>
          <span>{project?.technologies}</span>
          <a className={styles.Repo} target={'_blank'} href={project?.repository}>
            <Github className={styles.Git} />
            Github repo
          </a>
          <a className={styles.Deploy} target={'_blank'} href={project?.deploy}>
            Watch deploy <Back className={styles.Watch} />
          </a>
        </div>
      </Container>
    </div>
  )
}

export default SingleProjectPage
