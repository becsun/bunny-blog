import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Aboutpage from './components/Aboutpage'
import BunnyGame from './components/Bunnygame'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import BunnyIndex from './components/BunnyBreeds/BunnyIndex'
import BunnyBreedShow from './components/BunnyBreeds/BunnyBreedShow'
import BunnyCommunityNew from './components/BunnyCommunity/BunnyCommunityNew'
import BunnyCommunityIndex from './components/BunnyCommunity/Bunnycommunityindex'
import BunnyCommunityShow from './components/BunnyCommunity/Bunnycommunityshow'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}  />
        <Route path="/about" component={Aboutpage} />
        <Route path="/bunnycommunity/new" component={BunnyCommunityNew} />
        <Route path="/bunnycommunity/id" component={BunnyCommunityShow} />
        <Route path="/bunnycommunity" component={BunnyCommunityIndex} />
        <Route path="/bunnygame" component={BunnyGame} />
        <Route path="/bunnies" component={BunnyIndex} />
        <Route path="/bunnies/id" component={BunnyBreedShow}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
