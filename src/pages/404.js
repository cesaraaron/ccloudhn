import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

const NotFoundPage = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <CssBaseline />
      <Typography variant="h1">404</Typography>
      <div>
        <Typography variant="body2">
          La pagina que andas buscando no existe,{' '}
          <Link to="/">regresa a la pagina principal</Link>
        </Typography>
      </div>
    </div>
  )
}

export default NotFoundPage

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    marginTop: '-50px',
  },
}))
