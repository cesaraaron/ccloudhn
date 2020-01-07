import React from 'react'
import MAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
        </Toolbar>
      </MAppBar>
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
