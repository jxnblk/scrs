import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

const render = (Comp, opts = {}) => {
  const sheet = new ServerStyleSheet()

  const unstyled = renderToStaticMarkup(
    sheet.collectStyles(
      React.createElement(Comp)
    )
  )

  const styles = sheet.getStyleElement()
  const html = renderToStaticMarkup(
    React.createElement(Comp, {
      styles
    })
  )

  return html
}

export default render
