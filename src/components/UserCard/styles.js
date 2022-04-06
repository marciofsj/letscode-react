import styled from 'styled-components'

export const Container = styled.article`
    margin: auto;
    display: block;
    background-color: #231f3a;
    color: #fff;
    height: 500px;
    width: 300px;
    padding: 5px;
`

export const Category = styled.span`
    background-color: #f2be14;
    color: #000;
    border-radius: 10%;
    padding: 1px 2px;
    margin: 20px 10px;
    
`
export const Photo = styled.div`
    margin: auto;

    & img {
        margin: auto;
        display: block;
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border-style: groove;
        border-color: #01c0c6;
        border-width: 1px;
        padding: 5px; 
    }
`
export const Infosection = styled.div`

` 
export const Name = styled.h1`
    color: #fff;
    text-align: center;
    margin-bottom: 2px;
` 
export const State = styled.p`
    text-align: center;
` 
export const Carrer = styled.p`
    text-align: center;
` 

export const Buttonsection = styled.div`
    & Button:first-of-type {
        margin-left: 70px;
    }
`

export const Button = styled.button`
    background-color: #01c0c6;
    color: #231f3a;
    padding: 5px 15px;
    border-radius: 5%;
    border-color: #01c0c6;
    box-shadow: 0 1px 2px 0 #000;
    transition-duration: 0.4s;
    margin: 1.5px;

    :hover {
        background-color: #231f3a; /* Green */
        color: #01c0c6;
`

export const Skill = styled.h3`
    color: #fff;
    margin-left: 10px
`

export const Skillsection = styled.div`
    background-color: #1f1b36;
    margin-top: 30px;
    
    & button{
        background-color: #1f1b36;
        color: #fff;
        margin: 10px;
        border-color: #1f1b36;
        border-width: 0.1px;
        padding: 3px;
        font-size: 12px;
        box-shadow: 0 0.5px 1px 0 #000;
    }
` 