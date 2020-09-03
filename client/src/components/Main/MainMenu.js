import React from 'react';
import GoalIcon from '../../assets/icons/goal-icon-color.svg'


function MainMenu() {
    return (
      <div className="main-menu">
        <img className="main-menu__icon-1" alt="icon" src={GoalIcon} />
        <img className="main-menu__icon-1" alt="icon" src={GoalIcon} />
        <img className="main-menu__icon-1" alt="icon" src={GoalIcon} />
        <img className="main-menu__icon-1" alt="icon" src={GoalIcon} />
        
      </div>
    );
  }
  
  export default MainMenu;