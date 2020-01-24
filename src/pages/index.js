import React from 'react'
import 'flickity-imagesloaded'
import 'flickity/css/flickity.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppBar } from '../components/appBar'
import { Header } from '../sections/header'
import { About } from '../sections/about'
import { Services } from '../sections/services'
import { Clients } from '../sections/clients'
import { Contact } from '../sections/contact'

const IndexPage = () => (
  <>
    <CssBaseline />
    <AppBar />
    <Header />
    <About />
    <Services />
    <Clients />
    <Contact />
  </>
)

export default IndexPage
