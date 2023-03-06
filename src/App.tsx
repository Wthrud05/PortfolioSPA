import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import SingleProjectPage from './pages/SingleProjectPage/SingleProjectPage'
import { projects } from './assets/data'

function App() {
  const [projectID, setProjectId] = useState(0)

  const getIdHandler = (id: number): void => {
    setProjectId(id)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path={'/'} element={<HomePage />}></Route> */}
          <Route path={'/portfolio-spa'} element={<HomePage />}></Route>
          <Route path={'/projects'} element={<ProjectsPage getIdHandler={getIdHandler} />}></Route>
          <Route path={'/contacts'} element={<ContactsPage />}></Route>
          <Route
            path={'/projects/:id'}
            element={<SingleProjectPage project={projects[projectID - 1]} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
