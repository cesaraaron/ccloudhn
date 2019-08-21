import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import $ from 'jquery'
import { Header } from './sections/header'
import './App.css'
import 'animate.css'
import { AppBar } from './components/appBar'
import { About } from './sections/about'

export default function App() {
  useEffect(() => {
    $('#fullpage').fullpage({
      controlArrows: false,
      slidesNavigation: true
    })
  })

  return (
    <>
      <CssBaseline />
      <AppBar />
      <div id="fullpage">
        <Header />
        <About />
      </div>
    </>
  )
}
