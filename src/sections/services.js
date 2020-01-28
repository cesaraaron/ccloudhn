import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CodeIcon from '@material-ui/icons/Code'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SettingsIcon from '@material-ui/icons/Settings'
import PeopleIcon from '@material-ui/icons/People'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import SpeakerPhoneIcon from '@material-ui/icons/SpeakerPhone'
import BugReportIcon from '@material-ui/icons/BugReport'

export function Services() {
  const styles = useStyles()

  return (
    <div id="services" className={styles.services}>
      <Container>
        <Typography variant="h5" gutterBottom>
          LO QUE PODEMOS OFRECER
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          Crear productos innovadores. Entrego a tiempo
        </Typography>
        <span className={styles.underline}></span>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <CodeIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">DESARROLLO WEB</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Elabore sitios web eficientes y responsivos con las
                  tecnologías de punta más utilizadas.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <PhoneIphoneIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">DESARROLLO EN MÓVILES</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Extienda su negocio a las plataformas de dispositivos móviles
                  más populares: Android & iOS.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <ShoppingCartIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">SOLUCIONES E-COMMERCE</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Provea un portal de ventas online para intensificar su
                  presencia e incrementar sus ingresos.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <SettingsIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">SOFTWARE OUTSOURCING</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Ofrecemos servicios de alta calidad, confiables y rentables
                  durante el ciclo de vida de los productos de software.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <PeopleIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">TERCERIZACIÓN DE PERSONAL</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Extienda su equipo con profesionales de nivel que colaboren en
                  el desarrollo de su producto.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <CloudOutlinedIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">SERVICIOS EN LA NUBE</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Persista y obtenga su información relevante de manera
                  performante, segura y con alta disponibilidad.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <DesktopWindowsIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">DISEÑO</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Sorprenda con una interfaz moderna e innovadora que mejore la
                  experiencia de sus usuarios.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <SpeakerPhoneIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">MARKETING DIGITAL</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Alcance al público deseado a través campañas publicitarias,
                  midiendo los resultados obtenidos.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4}>
            <Grid container spaing={8}>
              <Grid item xs={3}>
                <BugReportIcon className={styles.icon} />
              </Grid>
              <Grid item xs={9} style={{ textAlign: 'left' }}>
                <Typography variant="h6">TESTING DE SOFTWARE</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Asegure la calidad, robustez y el correcto funcionamiento de
                  las soluciones entregadas.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  services: {
    backgroundColor: '#f5f5f5',
    // margin: '120px 0',
    paddingTop: '100px',
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
  icon: {
    fontSize: '54px',
  },
}))
