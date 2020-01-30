import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export function Contact({ db }) {
  const [dialogState, setDialogState] = useState({
    open: false,
    message: '',
    title: '',
  })
  const classes = useStyles()

  const handleCloseDialog = event => {
    setDialogState({ open: false, message: '' })
  }

  const { register, errors, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    db.collection('clients')
      .add(data)
      .then(() => {
        setDialogState({
          open: true,
          title: 'Mensaje enviado exitosamente',
          message: 'Nos pondremos en contacto tan pronto como sea posible.',
        })
        reset()
      })
      .catch(() => {
        setDialogState({
          open: true,
          title: 'Error',
          message:
            'Al parecer algo salio mal :( intenta de nuevo, y si el problema persiste escribenos directamente a ventas@ccloudhn.com',
        })
      })
  }

  return (
    <div id="contact" className={classes.contact}>
      <Container maxWidth="md">
        <Typography variant="h5" gutterBottom>
          CONTÁCTENOS
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <Box>
            Escribanos a <strong>ventas@ccloudhn.com</strong> o envienos un
            mensaje en el siguiente foro.
          </Box>
        </Typography>
        <span className={classes.underline}></span>
        {/* <form className={classes.form} noValidate autoComplete="off"> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid
              item
              xs={1}
              md={1}
              lgUp
              implementation="css"
              component={Hidden}
            />
            <Grid
              container
              item
              xs={10}
              md={10}
              spacing={2}
              alignItems="stretch"
            >
              {/* <Grid item md={2} /> */}
              <Grid item md={4} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    error={!!errors.name}
                    name="name"
                    inputRef={register({ required: true })}
                    label="Nombre *"
                    helperText={errors.name ? 'Este campo es requerido.' : ''}
                    variant="filled"
                  />
                </FormControl>
              </Grid>

              <Grid item md={4} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    error={!!errors.email}
                    name="email"
                    label="Correo electronico *"
                    inputRef={register({
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                    helperText={
                      errors.email
                        ? 'Ingresa un correo electronico valido.'
                        : ''
                    }
                    variant="filled"
                  />
                </FormControl>
              </Grid>

              <Grid item md={4} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    name="phone"
                    label="Telefono"
                    inputRef={register()}
                    variant="filled"
                  />
                </FormControl>
              </Grid>

              <Grid item sm={12} xs={12}>
                <FormControl error fullWidth>
                  <TextField
                    size="small"
                    error={!!errors.message}
                    multiline
                    rows="10"
                    name="message"
                    label="Mensaje *"
                    inputRef={register({ required: true })}
                    helperText={
                      errors.message ? 'Este campo es requerido.' : ''
                    }
                    variant="filled"
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  as="input"
                  type="submit"
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Dialog
        open={dialogState.open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogState.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogState.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

Contact.propTypes = {
  db: PropTypes.object.isRequired,
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
