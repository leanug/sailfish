import React from 'react'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { setColor, setBreakpoint } from '../styles'


const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="left">
                    <img src={ logo } alt="logo" />
                    &copy; { new Date().getFullYear() } Sailfish. All rights reserved
                </div>
                <div>
                    <a href="https://twitter.com">Instagram</a>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background: ${ setColor.delta_1 };
    color: ${ setColor.sigma };
    padding: 2rem 0;
    width: 100%;

    @media screen and ( min-width: ${ setBreakpoint.small } ) {
        .container {
            align-items: center;
            display: flex;
            justify-content: space-between;
            text-align: center;
        }
    }

    img {
        margin-right: 1.5rem;
        max-height: 3rem;
    }

    .left {
        align-items: center;
        display: flex;
    }

    a {
        color: ${ setColor.sigma };
    }
`

export default Footer
