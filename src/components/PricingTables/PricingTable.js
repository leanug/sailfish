import React from 'react';
import styled from 'styled-components'
import { setColor } from '../../styles'

const PricingTable = ({ topText, bigText, children, styleClass }) => {
    return (
        <Wrapper className={ styleClass }>
            <p className="topText">{ topText || 'default text' }</p>
            <p className="display-2">{ bigText || 'default text' }</p>
            { children }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${ setColor.tau };
    border-radius: 1rem;
    padding: 4rem;

    .topText {
        font-size: 1.2em;
    }

    .display-2 {
        margin: 3rem 0;
    }

    &.featured {
        background-color: ${ setColor.gamma };
        color: ${ setColor.sigma };
    }
`

export default PricingTable;