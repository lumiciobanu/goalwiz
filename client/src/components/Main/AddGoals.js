
import React, { Component } from 'react';
import './AddGoals.scss';
import { FaPlus } from "react-icons/fa";
import NewGoalForm from './NewGoalForm';

class AddGoals extends Component {
  render() {
  return (

    <div className="card textcenter mt-3 add-goal">
      <div className="goal-addheading card-header bg-primary text-white">
        <FaPlus /> Add New Goal
          </div>

      {/* <NewGoalForm /> */}
    </div>

  );
}
}

export default AddGoals;