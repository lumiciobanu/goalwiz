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

// componentDidMount() {
//     fetch('/goalsdata.json')
//     .then(response => response.json())
//     .then(result => {
//         const goals = result.map(item => {
//         return item;
//     });
//       this.setState({
//         myGoals: goals
//       });

//     });
// }

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
  