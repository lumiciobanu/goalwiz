
import React, { Component } from 'react';
import './GoalList.scss';

import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';
import axios from 'axios';

class GoalList extends Component {

    onClick = e => {
        this.props.onClick && this.props.onClick(e);
    };

    deleteItem = (id) => {
        axios({
            method: "DELETE",
            url: `http://localhost:8080/goals/${id}`
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
                                <p className="goalitem__title">{index+1}. {item.title}</p>
                                <p className="goalitem__notes">{item.notes}</p>
                            </div>

                            <div className="goalitem__date">
                                <Moment
                                    date={item.dueDate}
                                    parse="dd-MM-YYYY"
                                    format="MMM-d"
                                />
                            </div>
                        </div>
                        
                            <button className="goalitem__delete"
                                onClick={e => {
                                    this.deleteItem(item.id)}}>
                                <FaTimes />
                            </button>
                        
                    </div>
                ))}
            </div>
        );
    }
}

export default GoalList;


