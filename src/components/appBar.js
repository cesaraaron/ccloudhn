import React from 'react'
import MAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export function AppBar() {
  return (
    <>
      <MAppBar
        position="fixed"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography variant="h6">ccloudhn</Typography>
        </Toolbar>
      </MAppBar>
    </>
  )
}
