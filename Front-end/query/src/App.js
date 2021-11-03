import './App.css';
import Post from './Components/Post';
import Request from './Components/Request';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='links'>
        <Link className='link' to = '/'> Home </Link>
        <Link className='link' to = '/request'> Request </Link>
        <Link className='link' to = '/post'> Post </Link>
      </div>
      <div className='results'>
        <Switch>
          <Route exact path = '/'> <h1>This is an assignment to pass information between Express and React </h1> </Route>
          <Route path = '/request'> <Request /> </Route>
          <Route path = '/post'> <Post /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
