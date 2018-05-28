import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: tomato;
`

export default ({ styles, ...props }) => (
  <React.Fragment>
    <head>
      {styles}
    </head>
    <Heading>
      Hello
    </Heading>
  </React.Fragment>
)
