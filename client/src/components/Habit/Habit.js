import React, { Component } from 'react';



class Habit extends Component {
    
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(e.target.name.value)

        e.target.reset();

    };
    
    render() {

        
        return (
            <div className="habit">
                <form className="addform" onSubmit={this.addHabit}>
                    <input
                        className="addform__input"
                        type="text"
                        name="add"
                        id="add"
                        value={name}
                        placeholder="New habit"
                        
                    />
                    <button
                        type="submit"
                        className="addform__add"
                    >
                        Add </button>
                </form>
            </div>
        )
    }
}

export default Habit;