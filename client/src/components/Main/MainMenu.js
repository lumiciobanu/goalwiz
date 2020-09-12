import React from 'react';
import './MainMenu.scss';


import { MdDashboard } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { MdList } from "react-icons/md";

import { Link } from "react-router-dom";



function MainMenu() {
    return (
      <div className="main-menu">
        
        <MdDashboard color="#5B3E96" size="1.5em"/>
        <Link to="/habitspage"><MdList color="#5B3E96" size="1.5em" /></Link>
        <MdCreate color="#5B3E96" size="1.5em" />
        <MdLibraryBooks color="#5B3E96" size="1.5em" />
        
        
        
      </div>
    );
  }
  
  export default MainMenu;