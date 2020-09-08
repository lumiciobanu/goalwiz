
import React from 'react';
import './AddGoals.scss';
import { FaPlus } from "react-icons/fa";
import ModalTrigger from '../Modal/ModalTrigger'

export default function AddGoals (props) {
  
  return (

    <div className="addgoals">
      <div onClick={props.onClick} className="addgoals__triggerbtn">
        <ModalTrigger /> 
          </div>

     
    </div>

  );
}


