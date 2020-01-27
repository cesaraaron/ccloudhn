import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Flickity from 'flickity'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

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
      wrapAround: true,
    })
  })

  const {
    bancoAztecaImage,
    cocaColaImage,
    ultramotorImage,
    unitecImage,
    walmartImage,
    microsoftImage,
    paypalImage,
  } = useStaticQuery(clientsImagesQuery)

  const bancoAztecaImageFluid = bancoAztecaImage.childImageSharp.fluid
  const cocaColaImageFluid = cocaColaImage.childImageSharp.fluid
  const ultramotorImageFluid = ultramotorImage.childImageSharp.fluid
  const unitecImageFluid = unitecImage.childImageSharp.fluid
  const walmartImageFluid = walmartImage.childImageSharp.fluid
  const microsoftImageFluid = microsoftImage.childImageSharp.fluid
  const paypalImageFluid = paypalImage.childImageSharp.fluid

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
            <BackgroundImage
              className={styles.carouselImage}
              fluid={unitecImageFluid}
              alt="Logo de unitec"
            />
            <BackgroundImage
              className={styles.carouselImage}
              fluid={bancoAztecaImageFluid}
              alt="Logo de banco azteca"
            />
            <BackgroundImage
              className={styles.carouselImage}
              fluid={cocaColaImageFluid}
              alt="Logo de la coca cola"
            />
            <BackgroundImage
              className={styles.carouselImage}
              fluid={paypalImageFluid}
              alt="Logo de paypal"
            />
            <BackgroundImage
              className={styles.carouselImage}
              fluid={microsoftImageFluid}
              alt="Logo de microsoft"
            />
            {/* <BackgroundImage
              className={styles.carouselImage}
              fluid={nikeImageFluid}
              alt="Logo de nike"
            /> */}

            <BackgroundImage
              className={styles.carouselImage}
              fluid={walmartImageFluid}
              alt="Logo de walmart"
            />

            {/* <BackgroundImage
              className={styles.carouselImage}
              fluid={claroImageFluid}
              alt="Logo de claro"
            /> */}

            {/* <BackgroundImage
              className={styles.carouselImage}
              fluid={jetstereoImageFluid}
              alt="Logo de jetstereo"
            /> */}

            <BackgroundImage
              className={styles.carouselImage}
              fluid={ultramotorImageFluid}
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
    textAlign: 'center',
  },

  underline: {
    width: '55px',
    height: '4px',
    margin: '35px auto 50px',
    display: 'block',
    backgroundColor: theme.palette.secondary.main,
  },
  carouselImage: {
    height: '100px',
    width: '150px',
    backgroundSize: 'contain',
    marginRight: '10px',
  },
}))

const clientsImagesQuery = graphql`
  query {
    bancoAztecaImage: file(relativePath: { eq: "clients-banco-azteca.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    cocaColaImage: file(relativePath: { eq: "clients-coca-cola.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    ultramotorImage: file(relativePath: { eq: "clients-ultramotor.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    unitecImage: file(relativePath: { eq: "clients-unitec.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    walmartImage: file(relativePath: { eq: "clients-walmart.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    microsoftImage: file(relativePath: { eq: "clients-microsoft.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    paypalImage: file(relativePath: { eq: "clients-paypal.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
