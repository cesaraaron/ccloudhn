import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import BuildIcon from '@material-ui/icons/Build'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export function About() {
  const styles = useStyles()

  const { curvyLinesImage } = useStaticQuery(
    graphql`
      query {
        curvyLinesImage: file(relativePath: { eq: "productCurvyLines.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const curvyLinesImageFluid = curvyLinesImage.childImageSharp.fluid

  return (
    <div id="about" className={styles.about}>
      <BackgroundImage
        className={styles.curvyLinesImage}
        fluid={curvyLinesImageFluid}
      >
        <Container>
          <Typography variant="h5">ACERCA DE NOSOTROS</Typography>
          <span className={styles.underline}></span>
          <Grid container spacing={8}>
            <Grid item sm={4} xs={12}>
              <AirplanemodeActiveIcon
                style={{ fontSize: 45, marginBottom: '20px' }}
              />
              <Typography variant="h6" gutterBottom>
                NUESTRA MISION
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Ayudar a las empresas a superar sus objetivos comerciales con
                soluciones de software innovadoras, eficientes y de alta
                calidad.
              </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
              <BuildIcon style={{ fontSize: 45, marginBottom: '20px' }} />
              <Typography variant="h6" gutterBottom>
                QUÉ ES LO QUE HACEMOS
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Nos encargamos del análisis, diseño, desarrollo y mantenimiento
                del software, utilizando las tecnologías que mejor se adapten a
                sus ideas.
              </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
              <VerifiedUserIcon
                style={{ fontSize: 45, marginBottom: '20px' }}
              />

              <Typography variant="h6" gutterBottom>
                POR QUÉ ELEGIRNOS
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Buscamos los mejores resultados y cumplimos con nuestros plazos.
                Priorizamos el trabajo en equipo y la comunicación efectiva.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </BackgroundImage>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  about: {
    position: 'relative',
    // top: '64px',
    padding: '60px 0 120px',
    textAlign: 'center',
    marginBottom: '30px',
  },
  underline: {
    width: '55px',
    height: '4px',
    margin: '8px auto 50px',
    display: 'block',
    backgroundColor: theme.palette.secondary.main,
  },
  curvyLinesImage: {
    backgroundSize: 'auto',
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh',
    // top: "-64px",
    // left: "-30px",
  },
}))
