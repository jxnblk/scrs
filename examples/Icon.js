// svg example
import React from 'react'
import styled from 'styled-components'

export default styled(({ styles, ...props }) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    fill='currentcolor'>
    <head>
      {styles}
    </head>
    <path d='M16 0 L32 28 L0 28z' />
  </svg>
))([], {
  color: 'tomato'
})
