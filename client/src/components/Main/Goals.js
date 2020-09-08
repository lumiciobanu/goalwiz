import React from 'react';
import axios from 'axios';
//components
import AddGoals from './AddGoals';
import GoalList from './GoaIList';




class Goals extends React.Component {
 
  constructor() {
      super();
      this.state = {
        myGoals: [], 
        
      };
  }  

 updateGoals = (newList) => {
    this.setState ({ myGoals: newList })
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
     
    return(
      <div className="goals">
       
         <AddGoals/> 
        <GoalList updateGoal ={this.updateGoals} goals={this.state.myGoals}/>
       
        </div>
    );
    }
}
  
export default Goals;
  