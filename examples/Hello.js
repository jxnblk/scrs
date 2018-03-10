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
