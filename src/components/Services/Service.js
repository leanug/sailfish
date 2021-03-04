import React from 'react'
import styled from 'styled-components'

const Service = ({ icon, title, text}) => (
    <Wrapper>
        { icon }
        <h4>{ title }</h4> 
        <p>{text}</p> 
    </Wrapper>
)

const Wrapper = styled.div`
    h4 {
        margin: 1.5rem 0;
    }

    p:last-child {
        margin-bottom: 0;
    }

    svg {
        font-size: 2rem;
    }
`

export default Service;