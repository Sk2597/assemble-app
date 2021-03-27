import './App.css';
import HomePage from './components/HomePage';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import AssembleSteps from './components/AssembleSteps';
import SelectParts from './components/SelectParts';
import Assemble from './components/Assemble';

function App() {
  return (
    <div className="App">
     
     <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/stepsToAssemble" render={props => <SelectParts />} />
          <Route path="/assemble" render={props => <Assemble />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
