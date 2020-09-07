import React from 'react';
import axios from 'axios';
//components
import AddGoals from './AddGoals';
import GoalList from './GoaIList';
// import GoalsData from '../data/goalsdata.json';



class Goals extends React.Component {
 
  constructor() {
      super();
      this.state = {
        myGoals: []
      };
  }  

componentDidMount() {
    axios
    .get('http://localhost:8080/goals')
    .then(res => {
        const myGoals = res.data; 
        this.setState ( { myGoals})
        })
    }



  render () {
      const listItems = this.state.myGoals.map(item => (
        <div>{item.title}</div>
      ));
    return(
      <div className="goals">
       {listItems}
        <AddGoals />
        <GoalList />
       
        </div>
    );
    }
}
  
export default Goals;
  