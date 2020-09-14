import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

//Components
import MainPage from "./components/Main/MainPage";
import HabitsPage from "././pages/HabitsPage";
import Header from "././components/Header/Header";
import MainMenu from "././components/Main/MainMenu";
import Quote from "././components/Main/Quote";
import Goals from "././components/Main/Goals";
import GoalsPage from "././pages/GoalsPage";
import MyLibraryPage from "././pages/MyLibraryPage";

function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       
      <Switch>
          <Route path="/" exact render={() => {
            return <Redirect to="/MainPage" />
          }} />
         
          <Route path="/MainPage" exact component={MainPage} />
          <Route path="/goalspage" exact component={GoalsPage} />
          <Route path="/habitspage" exact component={HabitsPage} />
          <Route path="/mylibrarypage" exact component={MyLibraryPage} />
      </Switch>
      <MainMenu /> 
      
      </Router>
    </div>
  );
}

export default App;
