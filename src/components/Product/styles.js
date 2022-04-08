import styled from 'styled-components'

export const Container = styled.article`
    margin: auto;
    display: block;
    background-color: #2a2f40;
    color: #fff;
    display: flex;
    flex-direction: row;
    width: 550px
`
export const PhotoArea = styled.div`
    background-color: #ff6d39;
    border-radius: 0px 50% 50% 0;
    height: 300px;
    width: 300px;
    position: relative;
    pointer-events: none;

    & img {
        position: absolute;
        top: -100px;
        left: -120px;
    }
`

export const InfoArea = styled.div`
    flex: 1;
    padding: 15px;
`


