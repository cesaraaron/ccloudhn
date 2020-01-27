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
      autoPlay: true,
      draggable: true,
      contain: true,
    })
  })

  const { header1, header2 } = useStaticQuery(
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
      }
    `
  )

  const header1Fluid = header1.childImageSharp.fluid
  const header2Fluid = header2.childImageSharp.fluid

  return (
    <div className={classes.section}>
      <div className="carousel header-carousel">
        <BackgroundImage className={classes.slide} fluid={header1Fluid}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Ccloud servicios en la nube
            </Typography>

            <Typography variant="h6">
              Somos una innovadora compañia de servicios en la nube, enfocada en
              proveer soluciones de software en orden de ayudar tu negocio.
            </Typography>
          </Container>
        </BackgroundImage>
        <BackgroundImage className={classes.slide} fluid={header2Fluid}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Desarrollo personalizado
            </Typography>
            <Typography variant="h6">
              Aplicaciones personalizadas para la web, iphone, android, windows,
              linux & mac.
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
    backgroundColor: t.palette.primary.dark,
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    color: 'white',
    textAlign: 'center',
    backgroundSize: 'cover',
    textShadow: '1px 1px 2px #222',
    // backgroundAttachment: 'fixed'
  },
  textShadow: {
    textShadow: '1px 1px 2px #2223',
  },
}))
