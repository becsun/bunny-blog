import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">Bunny Blog</Link>            
            <ul className="right hide-on-med-and-down">
              <Link to="/" className="left hide-on-med-and-down">Home</Link>
              <Link to="/about" className="left hide-on-med-and-down">About</Link>
              <Link to="/bunnygame" className="left hide-on-med-and-down">Bunny Game</Link>
              <Link to="/products" className="left hide-on-med-and-down">Products</Link>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar