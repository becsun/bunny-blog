import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Aboutpage from './components/Aboutpage'
import Products from './components/Products'
import BunnyGame from './components/Bunnygame'
import Register from './components/auth/Register'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}  />
        <Route path="/about" component={Aboutpage} />
        <Route path="/products" component={Products} />
        <Route path="/bunnygame" component={BunnyGame} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
