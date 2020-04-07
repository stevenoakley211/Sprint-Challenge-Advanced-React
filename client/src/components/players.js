import React from 'react';
import Player from './SinglePlayer'
import {CardContainer} from './styles'
export default class Players extends React.Component{
    state = {
        players:[]
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(playersList => {
                this.setState({players: playersList})
            })
    }
    render(){
        return(
            <CardContainer>
                {this.state.players.map(players =>{
        return <Player player={players.name} country={players.country} searches={players.searches} />
        })}
            </CardContainer>)
    }
}
