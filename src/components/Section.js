import React from 'react'
import { Button } from "./Button"
import styled from 'styled-components'
import { setColor, setRadius } from '../styles/'

const Section = ({ fluid }) => (
    <Wrapper>
       
    </Wrapper>
)

const Wrapper = styled.section`
    .info-data > p {
        display: flex;
        align-items: center;
    }

    p:not(:last-child) {
        margin-bottom: 3rem;
    }

    input[type=text],
    input[type=email],
    textarea {
        background-color: ${ setColor.delta_3 };
        border: none;
        border-radius: ${ setRadius.radiusBeta };
        color: ${ setColor.sigma };
        font-size: 1.6rem;
        margin: .5rem 0 2rem 0;
        padding: 1.5rem;
        width: 100%;
    }
`

export default Section;