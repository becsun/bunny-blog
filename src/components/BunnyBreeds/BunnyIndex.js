import React from 'react'

import { getAllBunnies } from '../lib/api'
import BunnyBreedCard from './BunnyBreedCard'



class BunnyIndex extends React.Component {
  state={
    bunnies: [],
  }
  
  async componentDidMount() {
    try {
      const res = await getAllBunnies()
      this.setState({ bunnies: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
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
export default BunnyIndex