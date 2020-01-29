import React from 'react'
import 'flickity/css/flickity.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppBar } from '../components/appBar'
import { Header } from '../sections/header'
import { About } from '../sections/about'
import { Services } from '../sections/services'
import { Clients } from '../sections/clients'
import { Contact } from '../sections/contact'

import firebase from 'firebase/app'
import 'firebase/firestore'
import SEO from '../components/seo'

var firebaseConfig = {
  apiKey: 'AIzaSyAl_tuuxyV6wpuKrd1qs20I__yrvGaUAYM',
  authDomain: 'ccloudhn.firebaseapp.com',
  databaseURL: 'https://ccloudhn.firebaseio.com',
  projectId: 'ccloudhn',
  storageBucket: 'ccloudhn.appspot.com',
  messagingSenderId: '632670675637',
  appId: '1:632670675637:web:daab3c9a250baf0911d4fc',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const IndexPage = () => {
  const db = firebase.firestore()
  return (
    <>
      <SEO title="Inicio | ccloud" />
      <CssBaseline />
      <AppBar />
      <Header />
      <About />
      <Services />
      <Clients />
      <Contact db={db} />
    </>
  )
}

export default IndexPage
