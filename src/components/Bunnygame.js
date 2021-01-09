import React from 'react'

class BunnyGame extends React.Component {
  
  state = {
    bunnyChoice: '', 
    playerChoice: '',
    result: '',
  }

  

  playGame = event => {
    const choices = ['Kale', 'Peppers', 'Celery', 'Pellets' , 'Parsly']
    const playerChoice = event.target.value
    const bunnyChoice = choices[Math.floor(Math.random() * choices.length)]
    const result = this.results(playerChoice,bunnyChoice)
    this.setState({
      bunnyChoice,
      playerChoice,
      result,
    })

    console.log(playerChoice)
    console.log(bunnyChoice)
    console.log(result)
    console.log(playerChoice, bunnyChoice)
  }

  results = (playerChoice, bunnyChoice) => {
    if (playerChoice === bunnyChoice) return 'bingo'
    else {
      return 'nice try'
    }
  }



  render(){
    
    return ( 
      <>
        <p>bunnyChoice: {this.state.bunnyChoice} </p>
        <p>playerChoice: {this.state.playerChoice} </p>
        <p>result: {this.state.result}</p>

        <button onClick={this.playGame} 
          value ="Kale" 
          className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Kale</button>
        <button onClick={this.playGame} 
          value ="Peppers" 
          className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Peppers</button>
        <button onClick={this.playGame} 
          value ="Celery" 
          className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Celery</button>
        <button onClick={this.playGame} 
          value ="Pellets" 
          className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Pellets</button>
        <button onClick={this.playGame} 
          value ="Parsley" 
          className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Parsley</button>
        <button onClick={this.playGame} 
          value ="Hay" 
          className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Hay</button>
      </>
    )
  }
}

export default BunnyGame