import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

//Components
import MainPage from "./components/Main/MainPage";
import HabitsPage from "././pages/HabitsPage";


function App() {
  return (
    <div className="App">
      <Router>
       <MainPage /> 
      <Switch>
          <Route path="/" exact render={() => {
            return <Redirect to="/" />
          }} />
          <Route path="/" exact component={MainPage} />
          <Route path="/habitspage" component={HabitsPage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
