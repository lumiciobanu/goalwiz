
import React from 'react';
import '../Main/AddSection.scss';
import NewGoal from './NewGoal';

function AddSection() {
  return (
    <div className="addsection">
      <div className="addsection__goal">
        <h2 className="addsection__title">Add a Goal</h2>
        <div className="addsection__details">
          <NewGoal />
        </div>
      </div>
      <div className="addsection__habit">

      </div>
    </div>
  );
}

export default AddSection;