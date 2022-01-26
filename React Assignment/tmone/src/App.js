import './App.css';
import Assignment2 from './Component/Assignment2';
import Assignment1 from './Component/Assignment1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './Component/Posts';


function App() {
  return (
    <Router>
    <div>
      <h1>Currency Converter</h1>
      <Assignment1 />
      <hr></hr>
      <Assignment2 />
      <Switch>
        <Route exact path="/posts" component={Posts}></Route>
      </Switch>
      <hr></hr>
    </div>
    </Router>
    );
}

export default App;
