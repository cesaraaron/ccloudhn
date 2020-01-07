import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import bancoAztecaLogo from '../images/clients-banco-azteca.png'
import cocaColaLogo from '../images/clients-coca-cola.png'
import claroLogo from '../images/clients-claro.png'
import jetstereoLogo from '../images/clients-jetstereo.png'
import ultramotorLogo from '../images/clients-ultramotor.png'
import unitecLogo from '../images/clients-unitec.png'
import walmartLogo from '../images/clients-walmart.png'
import Flickity from 'flickity'

export function Clients() {
  const styles = useStyles()

  useEffect(() => {
    var elem = document.querySelector('.clients-carousel')
    new Flickity(elem, {
      prevNextButtons: false,
      autoPlay: 2000,
      draggable: true,
      contain: true,
      imagesLoaded: true,
      wrapAround: true
    })
  })

  return (
    <div id="clients" className={styles.clients}>
      <Container>
        <Typography variant="h5" gutterBottom>
          NUESTROS CLIENTES
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Empresas y emprendedores que han confiado en nosotros para llevar a
          cabo sus proyectos.
        </Typography>
        <span className={styles.underline}></span>
        <div className={styles.carouselContainer}>
          <div className="clients-carousel">
            <img
              className={styles.carouselImage}
              src={unitecLogo}
              alt="Logo de unitec"
            />
            <img
              className={styles.carouselImage}
              src={cocaColaLogo}
              alt="Logo de la coca cola"
            />
            <img
              className={styles.carouselImage}
              src={bancoAztecaLogo}
              alt="Logo de banco azteca"
            />
            <img
              className={styles.carouselImage}
              src={claroLogo}
              alt="Logo de claro"
            />
            <img
              className={styles.carouselImage}
              src={walmartLogo}
              alt="Logo de walmart"
            />
            <img
              className={styles.carouselImage}
              src={jetstereoLogo}
              alt="Logo de jetstereo"
            />
            <img
              className={styles.carouselImage}
              src={ultramotorLogo}
              alt="Logo de yamaha"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  clients: {
    margin: '60px 0 120px',
    position: 'relative',
    textAlign: 'center'
  },

  underline: {
    width: '55px',
    height: '4px',
    margin: '35px auto 50px',
    display: 'block',
    backgroundColor: theme.palette.secondary.main
  },
  carouselContainer: {
    // minHeight: '300px',
    // minWidth: '100%'
  },
  carouselImage: {
    display: 'block',
    height: '100px',
    /* set min-width,
     allow images to determine cell width */
    // maxWidth: '150px',
    // maxWidth: '150px',
    marginRight: '10px',
    /* vertically center */
    top: '50%',
    transform: 'translateY(-50%)'
  }
}))
