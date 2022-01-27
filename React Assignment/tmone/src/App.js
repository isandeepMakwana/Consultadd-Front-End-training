import './App.css';
import Assignment2 from './Component/Assignment2';
import Assignment1 from './Component/Assignment1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './Component/Posts';
import Assignment3 from './Component/Assignment3';


function App() {
  return (
    <Router>
    <div>
      <Assignment1 />
      <Assignment2 />
      <Switch>
        <Route exact path="/posts" component={Posts}></Route>
      </Switch>
      <hr></hr>
      <Assignment3 />
    </div>
    </Router>
    );
}

export default App;
