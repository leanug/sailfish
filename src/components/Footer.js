import React from 'react'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'
import { setColor } from '../styles'

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <p>
                    &copy; { new Date().getFullYear() } Erica Legrand. All rights reserved
                </p>
                <p><a href="https://twitter.com">Instagram</a></p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    align-items: center;
    background: ${ setColor.delta_1 };
    color: ${ setColor.sigma };
    
    padding: 2rem 0;
    text-align: center;
    width: 100%;

    .container {
        display: flex;
        justify-content: space-between;
    }

    a {
        color: ${ setColor.sigma };
    }
`

export default Footer
