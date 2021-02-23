// import axios from 'axios'
import React from 'react'
import BunnyBreedCard from './BunnyBreeds/BunnyBreedCard'
import { getAllBunnies } from './lib/api'



class BunnyBreeds extends React.Component {
  state={
    bunnies: [],
  }
  
  async componentDidMount() {
    try {
      const res = await getAllBunnies()
      this.setState({ bunnies: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  
  render(){
    console.log('I have rendered', this.state.bunnies)
  
    return (
      <section>
        <div className="container">
          <div className="card-container">
            {this.state.bunnies.map(bunny => (
              <BunnyBreedCard key={bunny._id} {...bunny}/>
            ))}
          </div>
        </div>
      </section>
      
    )
  }
}
export default BunnyBreeds