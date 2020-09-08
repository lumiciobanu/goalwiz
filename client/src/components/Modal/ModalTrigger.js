import React, { Component } from 'react';
import ModalAdd from '../Modal/ModalAdd';


class ModalTrigger extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        };
    }
    showModal = e => {
        this.setState({
            show: !this.state.show
            });
            console.log(this.state.show)
    };

    onClose = e => {
        this.props.show = false;
    };

    render() {
        return (
            <div>
                {this.state.show &&
                <ModalAdd
                    onClose={this.showModal}
                    show={this.state.show}
                    itemId={this.props.itemId}
                    name={this.props.itemName}
                    updateGoal={this.props.updateGoal}
                />}
                {this.state.show && <h2>Lorem ispum</h2>}
                <button className="modal__icon-delete"
                    onClick={e => {
                        this.showModal(e);
                    }}
                >
                    
                </button>

            </div>
        );
    }
}


export default ModalTrigger;