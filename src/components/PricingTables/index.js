import React from 'react'
import styled from 'styled-components'
import PricingTable from './PricingTable'

const PricingTables = () => {
    return (
        <Wrapper>
            <PricingTable
                topText="Single Page Website"
                bigText="$200"    
            >
                <p>Aesthetic copper mug hoodie everyday carry shoreditch edison </p>
                <p>Aesthetic copper mug hoodie</p>
                <p>Everyday carry shoreditch edison </p>
            </PricingTable>

            <PricingTable
                topText="Single Page Website"
                bigText="$200"   
                styleClass="featured" 
            >
                <p>Aesthetic copper mug hoodie everyday carry shoreditch edison </p>
                <p>Aesthetic copper mug hoodie</p>
                <p>Everyday carry shoreditch edison </p>
            </PricingTable>

            <PricingTable
                topText="Single Page Website"
                bigText="$200"    
            >
                <p>Aesthetic copper mug hoodie everyday carry shoreditch edison </p>
                <p>Aesthetic copper mug hoodie</p>
                <p>Everyday carry shoreditch edison </p>
            </PricingTable>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(30rem, 1fr));
    grid-gap: 3rem;
`

export default PricingTables;