import React from 'react'
import Theme from './theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Page/Home/index'
import Characters from './Page/Characters/index'
import SearchPage from './Page/SearchPage/index'
import ComicDetails from './Page/ComicDetails/index'
import CharacterDetails from './Page/CharacterDetails/index'

function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/characters' exact component={Characters}></Route>
          <Route path='/search' exact component={SearchPage}></Route>
          <Route path='/comic/:id' exact component={ComicDetails}></Route>
          <Route
            path='/character/:id'
            exact
            component={CharacterDetails}
          ></Route>
        </Switch>
      </Router>
    </Theme>
  )
}

export default App
