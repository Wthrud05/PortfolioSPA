import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />}></Route>
        <Route path={'/projects'} element={<ProjectsPage />}></Route>
        <Route path={'/contacts'} element={<ContactsPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
