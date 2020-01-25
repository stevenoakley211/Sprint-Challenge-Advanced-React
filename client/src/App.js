import React from 'react';
import WorldPlayer from './components/WorldPlayer'
import NavBar from './components/NavBar'
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
        <NavBar />
        {this.state.players.map(players =>{
        return <WorldPlayer player={players.name} country={players.country} searches={players.searches} />
        })}
      </div>
    )
  }
}

export default App;
