import React from 'react'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'
import { setColor } from '../styles'

const Footer = () => {
    return (
        <Wrapper>
            <SocialLinks styleClass="social-icons-footer" />
            <p>
                &copy; { new Date().getFullYear() } Erica Legrand. All rights reserved
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    align-items: center;
    background: #131313;
    justify-content: center;
    padding: 4rem 0;
    text-align: center;
    width: 100%;
`

export default Footer
