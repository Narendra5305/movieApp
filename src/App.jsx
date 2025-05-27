import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import MoviePage from './pages/movie'
import MovieDetail from './pages/movieDetails'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviePage/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
