import React from 'react'
// import Button from '@material-ui/core/Button'

class BunnyGame extends React.Component {
  
  state = {
    bunnyChoice: '', 
    playerChoice: '',
    result: '',
  }

  playGame = event => {
    const choices = ['Kale', 'Peppers', 'Celery', 'Pellets' , 'Parsley']
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
    const randomImage = new Array()
    randomImage[0] = 'https://res.cloudinary.com/do68wjft3/image/upload/v1610400315/4B86CE54-AC68-4CFE-B446-C13927F2BB27_1_201_a_kuqymi.jpg'
    randomImage[1] = 'https://res.cloudinary.com/do68wjft3/image/upload/v1610400314/9684B084-2E84-4F0A-95EC-D881625A3D74_1_201_a_bocluh.jpg'


    const number = Math.floor(Math.random() * randomImage.length)

    console.log(number
    )


    if (playerChoice === 'Kale' && bunnyChoice === 'Kale') { 
      return <video className="responsive-img" height="540" id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610316906/IMG_1826_xdmaqf.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Peppers' && bunnyChoice === 'Peppers') { 
      return <video className="responsive-img" height="540" id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610228689/IMG_2281_lihwoh.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Celery' && bunnyChoice === 'Celery') { 
      return <video className="responsive-img" height="540" id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610316897/IMG_2223_hzp6tm.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Pellets' && bunnyChoice === 'Pellets') { 
      return <video className="responsive-img" height="540" id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610317798/IMG_2277_ik414h.mp4" 
          type="video/mp4" /> 
      </video> 
    } if (playerChoice === 'Parsley' && bunnyChoice === 'Parsley') { 
      return <video className="responsive-img" height="540" id="background-video" loop autoPlay> 
        <source src="https://res.cloudinary.com/do68wjft3/video/upload/v1610318224/IMG_2276_vn4j5n.mp4" 
          type="video/mp4" /> 
      </video> 
    } else {
      return <img className="responsive-img" src={randomImage[number]}/>
    }
  }



  render(){
    
    return ( 
      <>
        {/* <p> {this.state.bunnyChoice} </p>
        <p>{this.state.playerChoice} </p> */}
        <h1>What is Thumper in the mood for?</h1>
        <button variant="contained" className="waves-effect waves-light btn-large" onClick={this.playGame} 
          value ="Kale" 
        ><i className="material-icons right">cloud</i>Kale</button>
        <button onClick={this.playGame} 
          value ="Peppers" 
          className="waves-effect waves-light btn-large"><i className="material-icons right">cloud</i>Peppers</button>
        <button onClick={this.playGame} 
          value ="Celery" 
          className="waves-effect waves-light btn-large"><i className="material-icons right">cloud</i>Celery</button>
        <button onClick={this.playGame} 
          value ="Pellets" 
          className="waves-effect waves-light btn-large"><i className="material-icons right">cloud</i>Pellets</button>
        <button onClick={this.playGame} 
          value ="Parsley" 
          className="waves-effect waves-light btn-large"><i className="material-icons right">cloud</i>Parsley</button>
        <button onClick={this.playGame} 
          value ="Hay" 
          className="waves-effect waves-light btn-large"><i className="material-icons right">cloud</i>Hay</button>
        <p>{this.state.result}</p>
      </>
    )
  }
}

export default BunnyGame