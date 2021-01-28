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
              <Link to="/bunnies" className="left hide-on-med-and-down">Bunny Breed</Link>
              <Link to="/bunnygame" className="left hide-on-med-and-down">Bunny Game</Link>
              <Link to="/products" className="left hide-on-med-and-down">Products</Link>
              <Link to="/register" className="left hide-on-med-and-down">Register</Link>
              <Link to="/login" className="left hide-on-med-and-down">Login</Link>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar