import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Switch>
    {/* FIX3: "exact" keyword should be added */}
    <Route exact path="/" component={Home} />
    {/* FIX4: The Route component should be given the prop "component" */}
    {/* FIX5:  When mentioning path parameters for a route we need to use ":" before the variable */}
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
