import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    width:328px;
    margin-bottom: 20px;
    line-height: 2.75rem;

    color: #FFF;
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    width:428px;
    margin-bottom: 20px;
    line-height: 1.5rem;

    color: #FFF;
`