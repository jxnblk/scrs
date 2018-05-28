
<img src='examples/icon.svg' width='32' height='32' />

# scrs

styled-components render static

```sh
npm i -g scrs
```

## CLI

```js
// App.js
import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: tomato;
`

export default props => (
  <React.Fragment>
    <head>
      {props.styles}
    </head>
    <Heading>
      Hello
    </Heading>
  </React.Fragment>
)
```

```sh
scrs App.js > index.html
```

## Node API

```js
const React = require('react')
const scrs = require('scrs')
const App = require('./App')

const html = scrs(props => (
  React.createElement(App, props)
))
```

## Options

- `--svg` (boolean) use SVG doctype instead of HTML

MIT License
