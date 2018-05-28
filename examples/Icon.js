// svg example
import React from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { fill: magenta; }
  33% { fill: cyan; }
  66% { fill: yellow; }
  100% { fill: magenta; }
`

const Path = styled.path([],{
  transformOrigin: '50% 50%',
  fill: 'magenta',
  animationName: pulse,
  animationDuration: '3s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite'
})

export default styled(({ styles, ...props }) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
  >
    {styles}
    <Path d='M16 0 L32 28 L0 28z' />
  </svg>
))([], {
})
