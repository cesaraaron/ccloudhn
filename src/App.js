import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Header } from './sections/header'
import { AppBar } from './components/appBar'
import { About } from './sections/about'

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Header />
      <About />
    </>
  )
}
