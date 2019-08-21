import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import $ from 'jquery'
import { Header } from './sections/header'
import './App.css'
import 'animate.css'

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
      <div id="fullpage">
        <Header />
      </div>
    </>
  )
}
