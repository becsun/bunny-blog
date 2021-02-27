import React from 'react'
// import { Parallax } from 'react-parallax'

// const image = 'https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_1512/v1610125886/thumper-homepage_stirnl.jpg'
// const image2 = 'https://res.cloudinary.com/do68wjft3/image/upload/v1614444415/054940A7-62B5-457C-9B7E-6981108D39ED_1_105_c_mlsidj.jpg'

// const insideStyles = {
//   background: 'white',
//   // padding: 20,
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%,-50%)',
// }





class Homepage extends React.Component {

  render(){
  
    return (
    
      <div className="fullscreen">
        <div className="caption center-align">
          <h3>Thumper</h3>
          <h5 className="dark grey-text text-lighten-3"> our small slogan.</h5>
        </div>
        <img src="https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_1512/v1610125886/thumper-homepage_stirnl.jpg"/> 
      </div>
      
    )
  }
}

export default Homepage