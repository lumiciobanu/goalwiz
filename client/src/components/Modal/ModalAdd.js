import React, { Component } from 'react';
import AddForm from './AddForm';
import './ModalAdd.scss';
import {FaTimes} from 'react-icons/fa';



class ModalAdd extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };



    render() {
        

        return (

            <div className="modalcontainer" id="modal">

                <div className="modal-main">
                    <p className="modal__close" onClick={e => {
                        this.onClose(e);
                    }}><FaTimes/></p>
                    <AddForm onClose={this.onClose} updateGoal={this.props.updateGoal}/>
                    {/* <div className="modal__actions">
                        <button className="modal__secondary-button" onClick={e => {
                            this.onClose(e);
                        }}>
                            Close
                    </button>
                       
                    </div> */}
                </div>
            </div>

        );

    }
}

export default ModalAdd;
