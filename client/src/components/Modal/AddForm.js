import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


class AddForm extends Component {

    state = {
        statusList: [
            'status two',
            'status one'
        ]
    }

    addNewGoal = (e) => {
        e.preventDefault()
        axios.post(`http://goalwizz.herokuapp.com/goals/`, {id: uuidv4(), title: e.target.title.value, notes: e.target.notes.value, dueDate: e.target.dueDate.value})
        .then(res => {
         this.props.updateGoal(res.data)
         this.props.onClose(e)
       })

    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(e.target.title.value, e.target.notes.value, e.target.dueDate.value)

        e.target.reset();

    };

    
   
    render() {
       

        return (

            <div className="formcontainer">
                
                    <form className="addform" onSubmit={this.addNewGoal}>
                        <div className="addform__content">
                            <input className="addform__input" id="title" name="title" placeholder="Add your Goal here" />
                            <input className="addform__input" id="notes" name="notes" placeholder="Add your Notes here" />
                            <input className="addform__input" id="dueDate" name="dueDate" placeholder="Add your Date here" />

                            <div className="addform__buttons">
                                <button onClick={this.reset} type="reset" className="addform__cancel">Cancel</button>

                                <button
                                    type="submit"
                                    className="addform__add"
                                    >
                                    + Add Goal</button>

                            </div>

                        </div>

                    </form>
            
            
            </div>
              
       )
}
}

export default AddForm;