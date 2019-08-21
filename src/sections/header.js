import React from 'react'
import { AppBar } from '../components/appBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import headerImage1 from '../images/header-1.jpg'

export function Header() {
  const classes = useStyles()

  return (
    <div className={`section ${classes.section}`}>
      <AppBar />

      <div className={`slide ${classes.slide}`} data-anchor="slide-1">
        <Container>
          <Typography
            variant="h4"
            className={`${classes.textShadow} animated fadeInUp`}
          >
            Somos una innovadora compañia de servicios en la nube, enfocada en
            proveer soluciones de software en orden de ayudar tu negocio.
          </Typography>
        </Container>
      </div>
      <div className={`slide ${classes.slide}`} data-anchor="slide-2">
        <Container className={classes.textShadow}>
          <Typography variant="h3">Desarrollo personalizado</Typography>
          <Typography variant="h5" className={classes.marginTop}>
            Aplicaciones personalizadas para smartphones, windows y la nube.
          </Typography>
        </Container>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  section: {
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url('${headerImage1}')`
  },
  textShadow: {
    textShadow: '2px 2px 3px #222'
  },
  slide: {
    position: 'relative',
    bottom: '60px'
  },
  marginTop: {
    marginTop: '15px'
  }
})
