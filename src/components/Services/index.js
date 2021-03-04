import React from 'react'
import styled from 'styled-components'
import Service from './Service'
import skills from '../../constants/services'

const Services = () => {
    return (
        <Wrapper>
            <div className="services-row">
                { skills.map( skill => {
                    const { id, title, text, icon } = skill
                    return (
                        <Service 
                            key={ id } 
                            title={title}
                            text={text}
                            icon={icon}
                        />
                    )
                }) }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .services-row {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(30rem, 1fr));
        grid-gap: 3rem;
    }
`

export default Services;