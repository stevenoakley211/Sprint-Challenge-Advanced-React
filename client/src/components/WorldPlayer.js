import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
`
const Img = styled.img`
    width:100%;
`

const WorldPlayer = props => {
    
        return(
            <Card>
                <h1>{props.player}</h1>
                <p>Country: {props.country}</p>
                <p>Times Searched: {props.searches}</p>
            </Card>
        )
    
}

export default WorldPlayer ;