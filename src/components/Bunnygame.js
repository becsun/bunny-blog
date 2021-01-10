import React from 'react'

class BunnyGame extends React.Component {
  
  state = {
    bunnyChoice: '', 
    playerChoice: '',
    result: '',
    bunnKaleVideo: false,
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
    
    if (playerChoice === 'Kale' && bunnyChoice === 'Kale') { 
      return <video id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610316906/IMG_1826_xdmaqf.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Peppers' && bunnyChoice === 'Peppers') { 
      return <video id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610228689/IMG_2281_lihwoh.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Celery' && bunnyChoice === 'Celery') { 
      return <video id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610316897/IMG_2223_hzp6tm.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Pellets' && bunnyChoice === 'Pellets') { 
      return <video id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610317798/IMG_2277_ik414h.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Parsley' && bunnyChoice === 'Parsley') { 
      return <video id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610228689/IMG_2281_lihwoh.mp4" 
          type="video/mp4" /> 
      </video> 
    } else {
      return 'nice try'
    }
  }



  render(){
    
    return ( 
      <>
        <p> {this.state.bunnyChoice} </p>
        <p>{this.state.playerChoice} </p>
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