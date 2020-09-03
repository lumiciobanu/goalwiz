
import React from 'react';
import '../Main/AddNew.scss';

function AddNew() {
    return (
      <div className="addnew">
        <div className="addnew__goal">
            <h2 className="addnew__title">Add a Goal</h2>
            <div className="addnew__details">
                <p className="addnew__topic">GoalWizz</p>
                <p className="addnew__due">Due to</p>
                  </div>
        </div>
        <div className="addnew__habit">
            
        </div>
      </div>
    );
  }
  
  export default AddNew;