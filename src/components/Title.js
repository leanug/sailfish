import React from "react"
import styled from 'styled-components'

const Title = ({ title, text, textAlign }) => {
  return (
    <Wrapper className={ textAlign }>
      <h2 className="display-2">{ title || 'default title' }</h2>
      { text && <p>{ text }</p> }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 4em;

  .center {
    text-align: center
  }

  & > p {
    margin-top: 1rem;
  }
`

export default Title