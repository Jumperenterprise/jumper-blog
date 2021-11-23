import React from 'react'
import './App.css'
import {useRoutes} from 'react-router-dom'

import Header from './components/Header'
import PostContainer from './components/PostContainer'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import PostView from './components/PostView'
import About from './components/About'

const App = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: [<Navbar />, <Header />, <PostContainer />, <Footer />],
    },
    {path: 'post/:id', element: [<Navbar />, <PostView />, <Footer />]},
    {path: 'about', element: [<Navbar />, <About />, <Footer />]},
    {path: '*', element: [<div><p>There's nothing here!</p></div>]}
  ])

  return routes

}

export default App
