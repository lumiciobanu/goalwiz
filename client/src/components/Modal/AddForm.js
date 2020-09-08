import React, { Component } from 'react';


class AddForm extends Component {
    
    
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)

    };
    render() {
        return (
            <form onSubmit={this.submitHandler} className="addform">
                <div className="addform__content">
                    <input className="addform__input" id="title" name="title" placeholder="Add your Goal here"/>
                    <input className="addform__input" id="notes" name="notes" placeholder="Add your Notes here" />
                    <input className="addform__input" id="date" name="date" placeholder="Add your Date here" />

                    <div className="addform__buttons">
                        <button onClick={this.reset} type="reset" className="addform__cancel">Cancel</button>
                        
                            <button type="submit" className="addform__add">+ Add Goal</button>

                    </div>

                </div>

            </form>
        )

    }
}

export default AddForm;