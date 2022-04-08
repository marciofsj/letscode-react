import styled from 'styled-components'

export const SizeArea = styled.div`
    display: flex;

    & Button {
        margin: 0 10px;
    }
    
    & Button:first-of-type {
        margin-left: 30px;
    }
`

export const ColorArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & > div {
    margin: 0 10px;
    }

    & > div:first-of-type {
    margin-left: 30px;
    }
    `
