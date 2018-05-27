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
  if (opts.svg) {
    styles.forEach(style => {
      const css = style.props.dangerouslySetInnerHTML.__html
      style.props.dangerouslySetInnerHTML.__html = `/*  <![CDATA[ */ ${css} /* ]]> */`
    })
  }
  const html = renderToStaticMarkup(
    React.createElement(Comp, {
      styles
    })
  )

  return html
}

export default render
