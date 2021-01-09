import React from 'react'

class BunnyGame extends React.Component {
  
  state = {
    bunnyChoice: '', 
    playerChoice: '',
    result: '',
  }

  choices = ['kale', 'peppers', 'celery', 'pellets' , 'parsley']

  playGame = event => {
    const playerChoice = event.target.value
    console.log(playerChoice)
  }



  render(){
    
    return ( 
      <>
        <p>bunnyChoice: {this.state.bunnyChoice} </p>
        <p>playerChoice: {this.state.playerChoice} </p>
        <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Kale</a>
        <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Peppers</a>
        <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Celery</a>
        <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Pellets</a>
        <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Parsley</a>
      </>
    )
  }
}

export default BunnyGame