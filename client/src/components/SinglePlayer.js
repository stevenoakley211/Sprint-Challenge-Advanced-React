import React from 'react';
import {Card} from './styles'
const Player = props => {
    return(
        <Card>
            <h1>{props.player}</h1>
            <p>Country: {props.country}</p>
            <p>Times Searched: {props.searches}</p>
        </Card>
        )
}

export default Player ;