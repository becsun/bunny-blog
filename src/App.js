import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'


import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Aboutpage from './components/Aboutpage'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}  />
        <Route path="/Aboutpage" component={Aboutpage} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
