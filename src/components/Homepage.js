import React from 'react'
import { Parallax } from 'react-parallax'

const image = 'https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_1512/v1610125886/thumper-homepage_stirnl.jpg'
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}

class Homepage extends React.Component {

  render(){
  
    return (
      <>
        <div className="parallax-container">
          <Parallax bgImage={image} strength={50}>
            <div style={{ height: 500 }}>
              <div style={insideStyles}>HTML inside the parallax</div>
            </div>
          </Parallax>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Thumper</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img src="https://res.cloudinary.com/do68wjft3/image/upload/v1610125886/thumper-homepage_stirnl.jpg"/></div>
        </div>
      </>
      
    )
  }
}

export default Homepage