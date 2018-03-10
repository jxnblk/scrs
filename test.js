import test from 'ava'
import React from 'react'
import { create } from 'react-test-renderer'
import styled from 'styled-components'
import render from './src'

const Heading = styled.h1`
  font-size: 48px;
  color: tomato;
`

const App = props => (
  <React.Fragment>
    <head>
      {props.styles}
    </head>
    <body>
      <Heading>
        Hello
      </Heading>
    </body>
  </React.Fragment>
)

test('renders to string', t => {
  const html = render(props => <App {...props} />)
  t.is(typeof html, 'string')
})

test('renders with style tag', t => {
  const html = render(props => <App {...props} />)
  t.regex(html, /style/)
})

test('passes a style element to the render callback', t => {
  let styles
  const html = render(props => {
    styles = props.styles
    return <App {...props} />
  })
  const json = create(styles).toJSON()
  t.is(typeof styles, 'object')
  t.is(typeof json.props['data-styled-components'], 'string')
  t.is(typeof json.props.dangerouslySetInnerHTML.__html, 'string')
})
