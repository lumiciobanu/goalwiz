import React from 'react';
import Goals from '../components/Main/Goals';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import './GoalsPage.scss';



export default function GoalsPage() {
    return (
      <div className="goalscontainer">
       <h2 className="goals-title"><Link to="/MainPage"><FaAngleLeft fill="#ffffff" /></Link>Goals list</h2>
        <Goals />
        
      
      </div>
    );
  }
  