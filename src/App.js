import { Switch, Route } from 'react-router-dom'
import Africa from './components/Africa'
import America from './components/America'
import Asia from './components/Asia'
import Countries from './components/Countries'
import Details from './components/Details'
import Europe from './components/Europe'
import Oceania from './components/Oceania'
import './style/All.css'
const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Countries />
        </Route>
        <Route exact path='/Details'>
          <Details />
        </Route>
        <Route exact path='/Africa'>
          <Africa />
        </Route>
        <Route exact path='/America'>
          <America />
        </Route>
        <Route exact path='/Asia'>
          <Asia />
        </Route>
        <Route exact path='/Europe'>
          <Europe />
        </Route>
        <Route exact path='/Oceania'>
          <Oceania />
        </Route>
      </Switch>
    </div>
  )
}

export default App
