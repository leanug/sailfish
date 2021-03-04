import { createGlobalStyle } from 'styled-components'
import { 
    setColor, 
    setFont, 
    setRadius, 
    setBreakpoint, 
    setSectionPadding, 
    setTransition } from '../styles/'

const Globals = createGlobalStyle`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background:  ${ setColor.colorPi_2 };
        color:       ${ setColor.colorSigma };
        font-family: ${ setFont.primaryFont };
        font-size: 1.5em;
        line-height: 2;
    }

    ul {
        list-style-type: none;
    }
    
    a {
        color: ${ setColor.colorSigma };
        text-decoration: none;
        ${ setTransition() };
    }

    a:hover {
        opacity: 0.6;
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${ setColor.colorSigma };
        font-family: ${ setFont.primaryFont };
        font-weight: 500;
        line-height: 1.25;
        text-transform: capitalize;
    }

    h1 { font-size: 2em; }
    h2 { font-size: 1.8em; }
    h3 { font-size: 1.3em; }
    h4 { font-size: 1.1em; }
    h5 { font-size: 1em; }
    h6 { font-size: 0.875em; }

    @media screen and ( min-width: ${ setBreakpoint.medium } ) {
        h1 { font-size: 2.4em; }
        h2 { font-size: 2em; }
        h3 { font-size: 1.6em; }
        h4 { font-size: 1.3em; }
        h5 { font-size: 1em; }
        h6 { font-size: 0.875em; }
    }

    .display-1 { font-size: 3em; }
    .display-2 { font-size: 2.8em; }
    .display-3 { font-size: 1.5em; }

    p {
        line-height: 1.8;
        margin: 0 0 1.25rem 0;
    }

    .section-bg {
        background-color: ${ setColor.colorPi_3 };
        width: 100%;
    }

    .container {
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    }
    
    .bcg {
        min-height: 100vh;
        display: grid;
        place-items: center;
    }

    .banner {
        min-height: 35vh;
        display: grid;
        padding: 10rem 0;
        place-items: center;
    }

    .container-fluid {
        margin: 0 4rem;
        width: calc( 100% - 4rem - 4rem);
    }

    .section-padding {
        padding: ${ setSectionPadding.padding };
    }

    .center {
        text-align: center;
    }
    
    .btn {
        background-color: ${ setColor.colorAlpha };
        border: 1px solid ${ setColor.colorAlpha };
        border-radius: ${ setRadius.radiusBeta };
        color: ${ setColor.colorSigma };
        font-size: 1.6rem;
        padding: 1rem 3rem;
        text-transform: capitalize;
        transition: all 0.5s linear;

        &:hover {
            background-color: ${ setColor.colorDelta_2 };
            color: ${ setColor.colorSigma };
            cursor: pointer;
        }
    }

    .small {
        font-size: 1.2rem;
    }

    .p-y {
        padding: 10rem 0;
    }
`

export default Globals