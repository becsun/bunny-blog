import React from 'react'
import { getAllBunnyPics } from '../lib/api'
import BunnyCommunityCard from './Bunnycommunitycard'


class BunnyCommunityIndex extends React.Component {
    state = {
      bunnyPics: [],
    }

    async componentDidMount() {
      try {
        const res = await getAllBunnyPics()
        this.setState({ bunnyPics: res.data })
      } catch (err){
        this.props.history.push('/notfound')
      }
    }
    render(){
      if (!this.state.bunnyPics) return null
      console.log('I have rendered', this.state.bunnyPics)

      return (
        <section>
          <div className="container">
            <div className="card-container">
              {this.state.bunnyPics.map(bunnyPic => (
                <BunnyCommunityCard key={bunnyPic._id} {...bunnyPic}/>
              ))}
            </div>
          </div>
        </section>
        
      )
    }
}

export default BunnyCommunityIndex