import styled from 'styled-components'
import { setColor, setRadius } from '../styles/'

export const Button = styled.button`
    background-color: ${ setColor.colorPi_1 };
    border: 1px solid ${ setColor.colorDelta_1 };
    border-radius: ${ setRadius.radiusBeta };
    color: ${ setColor.colorSigma };
    font-size: 1.6rem;
    padding: 1.6rem 3rem;
    text-transform: capitalize;
    transition: all 0.2s linear;

    &:hover {
        cursor: pointer;
    }
`