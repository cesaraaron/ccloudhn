import React, { useState } from 'react'
import MAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
// import InfoIcon from '@material-ui/icons/Info'
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
// import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles({
  list: {
    width: 'auto'
  },
  appBar: {
    background: '#0002',
    boxShadow: 'none'
  }
})

export function AppBar() {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))
  const [isDrawerVisible, setDrawerVisibility] = useState(false)

  const toggleDrawer = visibility => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerVisibility(visibility)
  }

  return (
    <>
      <MAppBar className={classes.appBar} position="relative">
        <Toolbar>
          {isSmallScreenAndDown ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                ccloudhn
              </Typography>
              <Button color="inherit" onClick={() => scrollPageTo('#about')}>
                Acerca de nosotros
              </Button>
              <Button color="inherit" onClick={() => scrollPageTo('#services')}>
                Lo que hacemos
              </Button>
              <Button color="inherit" onClick={() => scrollPageTo('#clients')}>
                Clientes
              </Button>
              <Button color="inherit" onClick={() => scrollPageTo('#contact')}>
                Contactenos
              </Button>
            </>
          )}
        </Toolbar>
      </MAppBar>
      <Drawer anchor="top" open={isDrawerVisible} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={() => scrollPageTo('#about')}>
              <ListItemText primary="Acerca de nosotros" />
            </ListItem>

            <ListItem button onClick={() => scrollPageTo('#services')}>
              <ListItemText primary="Lo que hacemos" />
            </ListItem>

            <ListItem button onClick={() => scrollPageTo('#clients')}>
              <ListItemText primary="Clientes" />
            </ListItem>

            <ListItem button onClick={() => scrollPageTo('#contact')}>
              <ListItemText primary="Contactenos" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  )
}

/* ```js
 * window.scrollPageTo('#some-section', 2000);
 * window.scrollPageTo(document.getElementById('some-section'), 1000);
 * window.scrollPageTo(500); // will scroll to 500px in 500ms
 * ```
 *
 * @returns {Promise}
 * @param {HTMLElement|Number|Selector} Target
 * @param {Number} Duration [default=500]
 *
 * Inspired by @andjosh's work
 *
 */
export function scrollPageTo(to, duration = 500) {
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  const easeInOutQuad = function(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  return new Promise((resolve, reject) => {
    const element = document.scrollingElement

    if (typeof to === 'string') {
      to = document.querySelector(to) || reject()
    }
    if (typeof to !== 'number') {
      to = to.getBoundingClientRect().top + element.scrollTop
    }

    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    const animateScroll = function() {
      currentTime += increment
      let val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      } else {
        resolve()
      }
    }
    animateScroll()
  })
}
