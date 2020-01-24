import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Input from '../components/input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

export function Contact() {
  const classes = useStyles()
  return (
    <div id="contact" className={classes.contact}>
      <Container maxWidth="md">
        <Typography variant="h5" gutterBottom>
          CONTÁCTENOS
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <Box>
            Escribanos a <strong>support@ccloud.com</strong> o envienos un
            mensaje en el siguiente foro.
          </Box>
        </Typography>
        <span className={classes.underline}></span>
        {/* <form className={classes.form} noValidate autoComplete="off"> */}
        <Grid container>
          <Grid item xs={2} mdUp implementation="css" component={Hidden} />
          <Grid container xs={8} md={12} spacing={2} alignItems="stretch">
            <Grid item md={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>
                  <strong>Nombre *</strong>
                </InputLabel>
                <Input required />
              </FormControl>
            </Grid>

            <Grid item md={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>
                  <strong>Email *</strong>
                </InputLabel>
                <Input required />
              </FormControl>
            </Grid>

            <Grid item md={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>
                  <strong>Telefono</strong>
                </InputLabel>
                <Input />
              </FormControl>
            </Grid>

            <Grid item sm={12} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>
                  <strong>Mensaje *</strong>
                </InputLabel>
                <Input multiline rows="10" required />
              </FormControl>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* </form> */}
      </Container>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  contact: {
    padding: '200px 0 120px',
    position: 'relative',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  underline: {
    width: '55px',
    height: '4px',
    margin: '35px auto 50px',
    display: 'block',
    backgroundColor: theme.palette.secondary.main,
  },
  carouselContainer: {
    // display: 'flex'
  },
}))
