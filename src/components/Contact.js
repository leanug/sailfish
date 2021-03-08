import React from 'react'
import styled from 'styled-components'
import { setColor, setRadius, setBreakpoint } from '../styles/'

const Contact = () => (
    <Wrapper>
        <form>
            <label htmlFor="contact-name">Name</label>
            <input type="text" id="contact-name" className="form-control" />
            <label htmlFor="contact-email">Email</label>
            <input type="email" id="contact-email" className="form-control" />
            <label htmlFor="contact-message">Message</label>
            <textarea name="message" rows="5" id="contact-message" className="form-control"></textarea>
            <button className="btn dark-button" type="submit">submit here</button>
        </form>
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
        background-color: ${ setColor.tau };
        border: none;
        border-radius: ${ setRadius.radiusBeta };
        font-size: 1.6rem;
        margin: .5rem 0 2rem 0;
        padding: 1.5rem;
        width: 100%;
    }

    @media screen and (min-width: ${ setBreakpoint.medium }) {
    
  }
`

export default Contact;