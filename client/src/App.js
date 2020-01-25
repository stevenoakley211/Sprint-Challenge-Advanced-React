import React from 'react';
import WorldPlayer from './compponents/WorldPlayer'
import './App.css';

class App extends React.Component{
  state = {
    players:[]
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res=> res.json())
      .then(playersList =>{
        console.log(playersList)
         this.setState({players: playersList})
      })
  }
  render(){
    return(
      <div>
        {this.state.players.map(players =>{
        return <WorldPlayer player={players.name} country={players.country} searches={players.searches} />
        })}
      </div>
    )
  }
}

export default App;
