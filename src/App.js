import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Header } from './sections/header'
import { AppBar } from './components/appBar'
import { About } from './sections/about'
import { Services } from './sections/services'
import { Clients } from './sections/clients'

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Header />
      <About />
      <Services />
      <Clients />
    </>
  )
}
