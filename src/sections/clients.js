import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Carousel from 'nuka-carousel'
import bancoAztecaLogo from '../images/clients-banco-azteca.png'
import cocaColaLogo from '../images/clients-coca-cola.png'
import claroLogo from '../images/clients-claro.png'
import jetstereoLogo from '../images/clients-jetstereo.png'
import ultramotorLogo from '../images/clients-ultramotor.png'
import unitecLogo from '../images/clients-unitec.png'
import walmartLogo from '../images/clients-walmart.png'

export function Clients() {
  const styles = useStyles()
  const theme = useTheme()
  const isBreakPointDownSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={styles.clients}>
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
          <Carousel
            autoplay
            dragging
            slidesToShow={isBreakPointDownSm ? 3 : 6}
            slidesToScroll={1}
            pauseOnHover={false}
            wrapAround
          >
            <img src={unitecLogo} alt="Logo de unitec" />
            <img src={cocaColaLogo} alt="Logo de la coca cola" />
            <img src={bancoAztecaLogo} alt="Logo de banco azteca" />

            <img src={claroLogo} alt="Logo de claro" />
            <img src={walmartLogo} alt="Logo de walmart" />
            <img src={jetstereoLogo} alt="Logo de jetstereo" />
            <img src={ultramotorLogo} alt="Logo de yamaha" />
          </Carousel>
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
    // display: 'flex'
  }
}))
