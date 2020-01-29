import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Flickity from 'flickity'
import './header.css'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export function Header() {
  const classes = useStyles()

  useEffect(() => {
    var elem = document.querySelector('.header-carousel')
    new Flickity(elem, {
      prevNextButtons: false,
      autoPlay: 5000,
      draggable: true,
      contain: true,
    })
  })

  const { header1, header2, header3 } = useStaticQuery(
    graphql`
      query {
        header1: file(relativePath: { eq: "header-1.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        header2: file(relativePath: { eq: "header-2.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        header3: file(relativePath: { eq: "header-3.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const header1Fluid = header1.childImageSharp.fluid
  const header2Fluid = header2.childImageSharp.fluid
  const header3Fluid = header3.childImageSharp.fluid

  return (
    <div className={classes.section}>
      <div className="carousel header-carousel">
        <BackgroundImage
          className={classes.slide}
          fluid={[
            `linear-gradient(to top, #5f72bddd 0%, #9b23eadd 100%)`,
            header1Fluid,
          ]}
        >
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Administra y haz crecer tu negocio
            </Typography>

            <Typography variant="subtitle1">
              Tu sitio web es el corazón de tu presencia online. Para que tu
              negocio sea encontrado en linea, tu sitio web tiene que ser
              responsivo, rápido y profesional.
            </Typography>
          </Container>
        </BackgroundImage>

        <BackgroundImage
          className={classes.slide}
          fluid={[
            // `linear-gradient(to right, #f12711dd, #f5af19dd)`,
            `linear-gradient(to bottom, #fdc830dd, #f37335dd)`,
            header3Fluid,
          ]}
        >
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Muéstranos tu idea, nosotros te la volvemos realidad
            </Typography>
            <Typography variant="subtitle1">
              No importa si quieres una página compleja para vender tus
              productos, o una sencilla como un blog personal, nosotros te
              ayudamos a crear cualquier tipo de pagina o aplicación web que
              necesites.
            </Typography>
          </Container>
        </BackgroundImage>

        <BackgroundImage
          className={classes.slide}
          fluid={[
            `linear-gradient(to right, #d31027dd, #ea384ddd)`,
            header2Fluid,
          ]}
        >
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Desarrollo personalizado
            </Typography>
            <Typography variant="subtitle1">
              No solo te podemos ayudar a crear tu pagina web, tambien te
              ofrecemos aplicaciones personalizadas para iPhone, Android,
              Windows e incluso Linux!.
            </Typography>
          </Container>
        </BackgroundImage>
      </div>
    </div>
  )
}

const useStyles = makeStyles(t => ({
  section: {
    position: 'relative',
    top: '-64px',
    // minHeight: '100vh',
    // minWidth: '100vw',
  },
  secondBackground: {
    backgroundColor: '#333',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    // textShadow: '1px 1px 2px #222',
    // backgroundAttachment: 'fixed'
  },
  textShadow: {
    // textShadow: '1px 1px 2px #2223',
  },
}))
