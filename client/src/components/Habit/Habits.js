import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';

import './Habits.scss';
import { FaPlus } from "react-icons/fa";





const initialList = [
  {
    id: uuidv4(),
    name: "Coding"
  },
  {
    id: uuidv4(),
    name: "Exercise"
  }
];

const Checkbox = (props) => (
  <input
    id="checkbox"
    name="checkbox"
    type="checkbox"
    className="check-checkbox"
    onChange={() => {
      let form = document.getElementById(props.item)
      let checkedBoxes = 0
      form.childNodes.forEach(
        element => {
          if (element.checked) {
            checkedBoxes += 1
          }
        }
      )
      if (checkedBoxes === 7) {
        props.changeHandler(true)
      }

      // else if (checkedBoxes === 7) {
      //   props.changeHandler(true)
      // }
    }}
  />

);



const Habits = () => {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");
  const [show, setShow] = React.useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ id: uuidv4(), name });
    setList(newList);
    setName("");
  }

  function handleRemove(id) {
    const removeList = list.filter((item) => item.id !== id);

    setList(removeList);
  }


  return (

    <div className="habits-container">
      {show &&
        <div className="habits-show">
          <div className="habits-show-main"><p>Hello</p></div>
        </div>}

      <h2 className="habits-title">Habits list</h2>

      <div className="habits-form">
        <input className="habits-input" type="text" value={name} onChange={handleChange} placeholder="New habit" />
        <button className="habits-add" type="button" onClick={handleAdd}>
          <FaPlus /> Add New Habit
          </button>
      </div>
      <ul className="habits-ulist">
        {list.map((item) => (
          <li className="habits-list" key={item.id}>{item.name}
            <div className="habits-form-button">
              <form id={item.id}>
                <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id} /></form>
              <button className="habits-remove" type="button" onClick={() => handleRemove(item.id)}>
                <FaTimes />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;

