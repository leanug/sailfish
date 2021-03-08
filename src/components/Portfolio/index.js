import React from 'react'
import Work from './Work'
import styled from 'styled-components'
import { setContainer, setGridGap } from '../../styles/'

const index = ({ portfolio, title }) => {
    return (
        <Wrapper>
                <div className="projects-wrapper">
                { portfolio.map( work => {
                    return <Work key={ work.id } { ...work } />
                })}
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .container {
    ${ setContainer.container };
  }

  .projects-wrapper {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 32rem, 1fr ));
    grid-template-rows: repeat( auto-fit, minmax( 40rem, 1fr ));
    grid-gap: ${ setGridGap.gridGap };
  }
`

export default index;