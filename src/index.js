import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

const render = Comp => {
  const sheet = new ServerStyleSheet()

  const unstyled = renderToString(
    sheet.collectStyles(
      Comp({})
    )
  )

  const styles = sheet.getStyleElement()
  const html = renderToString(
    Comp({ styles })
  )

  return html
}

export default render
