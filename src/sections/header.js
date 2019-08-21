import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import headerImage1 from '../images/header-1.jpg'
import headerImage2 from '../images/header-2.jpg'

export function Header() {
  const styles = useStyles()

  return (
    <div className={`section ${styles.textShadow}`}>
      <div className={`slide ${styles.firstSlide}`} data-anchor="slide-1">
        <Container>
          <Typography variant="h3" gutterBottom>
            Ccloud servicios en la nube
          </Typography>

          <Typography variant="h5" className="animated fadeInUp">
            Somos una innovadora compañia de servicios en la nube, enfocada en
            proveer soluciones de software en orden de ayudar tu negocio.
          </Typography>
        </Container>
      </div>
      <div className={`slide ${styles.secondSlide}`} data-anchor="slide-2">
        <Container>
          <Typography variant="h3" gutterBottom>
            Desarrollo personalizado
          </Typography>
          <Typography variant="h5">
            Aplicaciones personalizadas para la web, iphone, android, windows,
            linux & mac.
          </Typography>
        </Container>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  firstSlide: {
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url('${headerImage1}')`
  },
  secondSlide: {
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url('${headerImage2}')`
  },
  textShadow: {
    textShadow: '2px 2px 3px #222'
  },
  marginTop: {
    marginTop: '15px'
  }
})
