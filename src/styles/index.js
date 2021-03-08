/**
 * Styled componentes helper functions
 */

export const setColor = {
    alpha  : "#FFD948", // yellow
    gamma  : "#0080FF", // blue 
    delta_1: "#1B1A1F", // dark 1
    delta_2: "#2C2B33", // dark 2
    delta_3: "#5D5A6B", // dark 3
    sigma  : "#FFFFFF", // white 0
    tau    : "#F6F6F6", // white 1
}

export const setFont = {
    primaryFont  : '"Rubik"',
    secondaryFont: '"Rubik"'
}

export const setPostMaxWidth = {
    width: '66rem'
}

export const setBreakpoint = {
    small  : '57.6rem',
    medium : '76.8rem',
    large  : '99.2rem',
    xLarge : '120rem',
    xxLarge: '140rem'
}

export const setGridGap = {
    gridGap: '4rem',
    gridGapAlpha: '2rem',
    gridGapBeta: '3rem',
    gridGapGamma: '5rem'
}

export const setRadius = {
    radiusAlpha:  '1rem',
    radiusBeta:   '0.5rem',
    radiusGamma:  '0.2rem',
}

export const setSectionPadding = {
    padding: `10rem 0;`
}

export const setContainer = {
    container: `
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    `
}

export const setContainerFluid = {
    container: `
        margin: 0 auto;
        width: 90vw;
    `
}

export const setTransition = ({
    property = 'all',
    time = '0.3s',
    timing = 'ease-in-out' 
} = {}) => {
    return `transition: ${property} ${time} ${timing}`
}