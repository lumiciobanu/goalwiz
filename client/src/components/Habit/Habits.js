import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';





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
      className="check__checkbox"
      onChange={() => {
        let form = document.getElementById(props.item)
        let checkedBoxes = 0
        form.childNodes.forEach (
          element => {
            if (element.checked) {
              checkedBoxes += 1
            }
          }
        )
        if (checkedBoxes === 4) {
          props.changeHandler (true)
        }

        else if (checkedBoxes === 7) {
          props.changeHandler (true)
      }}}
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
    const newList = list.concat({ id:uuidv4(), name });
    setList(newList);
    setName("");
  }

  function handleRemove(id) {
    const removeList = list.filter((item) => item.id !== id);

    setList(removeList);
  }
  
  return (
    <div>
      {show && <h1>Hello</h1> }
      
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add New Habit
          </button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name} <form id={item.id}><Checkbox changeHandler={setShow} item={item.id}/> <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id}/> <Checkbox changeHandler={setShow} item={item.id} /> <Checkbox changeHandler={setShow} item={item.id}/> </form>
            <button type="button" onClick={() => handleRemove(item.id)}>
            Remove
            <FaTimes />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;

// onClick={handleRemove(item.id)}