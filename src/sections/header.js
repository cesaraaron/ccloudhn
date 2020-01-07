import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'nuka-carousel'
import headerImage1 from '../images/header-1.jpg'
import headerImage2 from '../images/header-2.jpg'

export function Header() {
  const { section, slide, firstSlide, secondSlide } = useStyles()

  return (
    <div className={section}>
      <Carousel enableKeyboardControls>
        <div className={slide + ' ' + firstSlide}>
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              Ccloud servicios en la nube
            </Typography>

            <Typography variant="h5">
              Somos una innovadora compañia de servicios en la nube, enfocada en
              proveer soluciones de software en orden de ayudar tu negocio.
            </Typography>
          </Container>
        </div>
        <div className={slide + ' ' + secondSlide}>
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              Desarrollo personalizado
            </Typography>
            <Typography variant="h5">
              Aplicaciones personalizadas para la web, iphone, android, windows,
              linux & mac.
            </Typography>
          </Container>
        </div>
      </Carousel>
    </div>
  )
}

const useStyles = makeStyles({
  section: {
    position: 'relative',
    top: '-64px',
    minHeight: '100vh',
    minWidth: '100vw'
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    textShadow: '2px 2px 3px #222'
    // backgroundAttachment: 'fixed'
  },
  firstSlide: {
    backgroundImage: `url('${headerImage1}')`
  },
  secondSlide: {
    backgroundImage: `url('${headerImage2}')`
  },
  textShadow: {
    textShadow: '2px 2px 3px #222'
  },
  marginTop: {
    marginTop: '15px'
  }
})
