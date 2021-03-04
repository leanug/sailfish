import React from 'react'
import { Button } from "./Button"
import { BsGeoAlt, BsPhone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import styled from 'styled-components'
import { setColor, setRadius } from '../styles/'

const Contact = () => (
    <Wrapper>
        <form>
            <label htmlFor="contact-name">Name</label>
            <input type="text" id="contact-name" className="form-control" />
            <label htmlFor="contact-email">Email</label>
            <input type="email" id="contact-email" className="form-control" />
            <label htmlFor="contact-message">Message</label>
            <textarea name="message" rows="5" id="contact-message" className="form-control"></textarea>
            <Button type="submit">submit here</Button>
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
        background-color: ${ setColor.colorDelta_3 };
        border: none;
        border-radius: ${ setRadius.radiusBeta };
        color: ${ setColor.colorSigma };
        font-size: 1.6rem;
        margin: .5rem 0 2rem 0;
        padding: 1.5rem;
        width: 100%;
    }
`

export default Contact;