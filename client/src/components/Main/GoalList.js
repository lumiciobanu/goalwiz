
import React, { Component } from 'react';
import '../Main/Goals.scss';

import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { FaRegCheckCircle } from 'react-icons/fa';

class GoalList extends Component {

    onClick = e => {
        this.props.onClick && this.props.onClick(e);
    };

    deleteItem = (id) => {
        axios({
            method: "DELETE",
            url: `https://goalwizz.herokuapp.com/goals/${id}`
        })
        .then(res => {
            this.props.updateGoal(res.data) 
        })
        .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="goallist">
                {this.props.goals.map((item, index) => (

                    <div className="goalitem" key={item.id}>
                        <div className="goalitem__info">
                            <div className="goalitem__head">
                            <p className="goalitem__title"><FaRegCheckCircle className="goalitem__icon" fill="#a5a1ac" /> {item.title}</p>
                            <div className="goalitem__datainfo">
                                <p className="goalitem__dueto">Due to: &nbsp; </p>
                                <p className="goalitem__data"> {item.dueDate}</p></div>
                            </div>

                            <div className="goalitem__bottom">
                                {item.notes}
                                <button className="goalitem__delete"
                                onClick={e => {
                                    this.deleteItem(item.id)}}>
                                <FaTimes />
                            </button>
                                   
                            </div>

                            
                        </div>
                        
                            
                        
                    </div>
                ))}
            </div>
        );
    }
}

export default GoalList;


