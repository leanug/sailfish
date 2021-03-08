import React from 'react'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { setColor } from '../styles'


const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div>
                    <img src={ logo } alt="logo" />
                    &copy; { new Date().getFullYear() } Sailfish. All rights reserved
                </div>
                <div><a href="https://twitter.com">Instagram</a></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background: ${ setColor.delta_1 };
    color: ${ setColor.sigma };
    padding: 2rem 0;
    text-align: center;
    width: 100%;

    .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    img {
        margin-right: 1.5rem;
        max-height: 3rem;
    }

    div {
        align-items: center;
        display: flex;
    }

    a {
        color: ${ setColor.sigma };
    }
`

export default Footer
