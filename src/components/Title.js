import React from "react"
import styled from 'styled-components'

const Title = ({ title, text }) => {
  return (
    <Wrapper>
      <h2 className="display-2">{ title || 'default title' }</h2>
      { text && <p>{ text }</p> }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 4em;

  h2 {
    text-align: center;
  }

  & > p {
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`

export default Title