import { Link, IProject } from '../assets/types'
import wallOfPic from '../assets/images/wall-of-pictures.png'
import searchApp from '../assets/images/react-search.png'
import landing from '../assets/images/landing.png'
import songbirdQuiz from './images/songbird.png'
import gameOfTag from './images/gameoftag.png'
import excelJS from './images/excel.png'

export const links: Link[] = [
  { id: 1, name: 'Home', path: '/portfolio-spa' },
  { id: 2, name: 'Projects', path: '/projects' },
  { id: 3, name: 'Contacts', path: '/contacts' },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Wall of pictures',
    technologies: 'HTML, CSS, JavaScript, Webpack',
    repository: 'https://github.com/Wthrud05/wall-of-pictures',
    deploy: 'https://wthrud05.github.io/wall-of-pictures/build/index.html',
    image: wallOfPic,
  },
  {
    id: 2,
    name: 'Mini seacrh app',
    technologies: 'SCSS, ReactJS',
    repository: 'https://github.com/Wthrud05/react-search',
    deploy: 'https://wthrud05.github.io/react-search/',
    image: searchApp,
  },
  {
    id: 3,
    name: 'Landing',
    technologies: 'HTML, CSS, JavaScript',
    repository: 'https://github.com/Wthrud05/landing-portfolio',
    deploy: 'https://wthrud05.github.io/landing-portfolio/',
    image: landing,
  },
  {
    id: 4,
    name: 'Songbird quiz',
    technologies: 'HTML, CSS, JavaScript',
    repository: 'https://github.com/Wthrud05/songbird-quizz',
    deploy: 'https://wthrud05.github.io/songbird-quizz/pages/start.html',
    image: songbirdQuiz,
  },
  {
    id: 5,
    name: 'Game of tag',
    technologies: 'HTML, CSS, JavaScript',
    repository: 'https://github.com/Wthrud05/game-of-tag',
    deploy: 'https://wthrud05.github.io/game-of-tag/',
    image: gameOfTag,
  },
  {
    id: 6,
    name: 'Excel JS',
    technologies: 'HTML, CSS, JavaScript, Webpack',
    repository: 'https://github.com/Wthrud05/excel-JS',
    deploy: 'https://wthrud05.github.io/excel-JS/build/index.html',
    image: excelJS,
  },
]
