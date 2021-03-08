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
        background:  ${ setColor.sigma };
        color:       ${ setColor.delta_1 };
        font-family: ${ setFont.primaryFont };
        font-size: 1.5em;
        line-height: 2;
    }

    ul {
        list-style-type: none;
    }
    
    a {
        color: ${ setColor.delta_1 };
        text-decoration: none;
        ${ setTransition() };
    }

    a:hover {
        opacity: 0.6;
        text-decoration: none;
    }

    h1, .h1,
    h2, .h2,
    h3, .h3,
    h4, .h4,
    h5, .h5,
    h6, .h6 {
        font-family: ${ setFont.primaryFont };
        line-height: 1.25;
        text-transform: capitalize;
    }

    h1, .h1 { font-size: 2em; }
    h2, .h2 { font-size: 1.8em; }
    h3, .h3 { font-size: 1.3em; }
    h4, .h4 { font-size: 1.1em; }
    h5, .h5 { font-size: 1em; }
    h6, .h6 { font-size: 0.875em; }

    @media screen and ( min-width: ${ setBreakpoint.medium } ) {
        h1, .h1 { font-size: 3em; }
        h2, .h2 { font-size: 2em; }
        h3, .h3 { font-size: 1.6em; }
        h4, .h4 { font-size: 1.3em; }
        h5, .h5 { font-size: 1em; }
        h6, .h6 { font-size: 0.875em; }
    }

    .display-1, 
    .display-2, 
    .display-3 {
        font-family: ${ setFont.primaryFont };
        font-weight: 700;
        line-height: 1.1;
     }

    .display-1 { font-size: 6rem; }
    .display-2 { font-size: 4rem; }
    .display-3 { font-size: 3rem; }

    p {
        line-height: 1.8;
        margin: 0 0 1.25rem 0;
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
        border-radius: ${ setRadius.radiusBeta };
        display: inline-block;
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 1rem;
        padding: 0.8rem 3rem;
        text-transform: capitalize;
        ${ setTransition() };
        cursor: pointer;
    }

    button.btn {
        padding: 1.6rem 3rem;
    }

    .btn.border {
        background-color: transparent;
        
        &:hover {   
            background-color: ${ setColor.delta_2 };
            color: ${ setColor.sigma };
        }
    }

    .btn.border.dark {
        border: 1px solid ${ setColor.delta_1 };
        color: ${ setColor.delta_1 };
        
        &:hover {   
            background-color: ${ setColor.delta_2 };
            color: ${ setColor.sigma };
        }
    }

    .btn.border.light {
        border: 1px solid ${ setColor.sigma };
        color: ${ setColor.sigma };
        
        &:hover {   
            background-color: ${ setColor.delta_2 };
            color: ${ setColor.sigma };
        }
    }

    .dark-button {
        background-color: ${ setColor.delta_1 };
        color: ${ setColor.sigma };
        border: none;
        
        &:hover {   
            background-color: ${ setColor.delta_2 };
            border: none;
            color: ${ setColor.sigma };
        }
    }

    .light-button {
        background-color: ${ setColor.sigma };
        color: ${ setColor.gamma };
        border: none;
        
        &:hover {   
            background-color: ${ setColor.delta_2 };
            border: none;
            color: ${ setColor.sigma };
        }
    }

    .small {
        font-size: 1.2rem;
    }

    .p-y {
        padding: 10rem 0;
    }

    .vh-100 {
        min-height: 100vh;
    }
`

export default Globals