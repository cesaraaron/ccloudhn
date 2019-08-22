import React from 'react'
import MAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  appBar: {
    background: '#0002',
    boxShadow: 'none'
  }
})

export function AppBar() {
  const styles = useStyles()
  return (
    <>
      <MAppBar className={styles.appBar} position="relative">
        <Toolbar>
          <Typography variant="h6">ccloudhn</Typography>
        </Toolbar>
      </MAppBar>
    </>
  )
}
