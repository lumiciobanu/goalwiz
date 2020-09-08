
import React, { Component } from 'react';

class NewGoalForm extends Component {
  render() {
  return (

    
      <div className="card-body">
        <form id="aptForm" noValidate>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="goalName"
              readOnly
            >
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="goalName"
                placeholder="Title"
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptDate"
            >
              Due Date
                </label>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="goalDate"
                id="goalDate"
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label className="col-md-2 text-md-right" htmlFor="goaltNotes">
              </label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                rows="4"
                cols="50"
                name="goalNotes"
                id="goalNotes"
                placeholder="Goal Notes"
              />
            </div>
          </div>

          <div className="form-group form-row mb-0">
            <div className="offset-md-2 col-md-10">
              <button
                type="submit"
                className="btn btn-primary d-block ml-auto"
              >
                Add New Goal
                  </button>
            </div>
          </div>
        </form>
      </div>
    

  );
}
}

export default NewGoalForm;