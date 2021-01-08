import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Bunny Blog</a>
            <ul className="right hide-on-med-and-down">
              <Link to="/" class="left hide-on-med-and-down">Home</Link>
              <Link to="/about" class="left hide-on-med-and-down">About</Link>
              <Link to="/bunnygame" class="left hide-on-med-and-down">Bunny Game</Link>
              <Link to="/products" class="left hide-on-med-and-down">Products</Link>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar