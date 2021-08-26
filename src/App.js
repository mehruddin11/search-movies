import {BrowserRouter as Router, Route, Switch} from 
'react-router-dom'
import Home from './home';
import SingleMovies from './singlemovie'
import ErrorPage from './err';
function App() {
  return (
  <Router>
    <Switch >
        <Route path  ='/' exact>
            <Home/>
        </Route>
        <Route  path ='/movies/:id' children={<SingleMovies/>} />
        <Route  exact path ='*'>
            <ErrorPage/>
        </Route>
    </Switch>
  </Router> 
  );
}

export default App;
