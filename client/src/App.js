import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

//Components
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" exact render={() => {
            return <Redirect to="/main" />
          }} />
          <Route path="/main" exact component={Main} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
