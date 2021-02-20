import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoValue, setTodoValue] = useState('');
  const [priorityValue, setPriorityValue] = useState(1);

  const handleChange = (e) => {
    if (e.target.name === 'textTodoInput') {
      setTodoValue(e.target.value);
    }
    if (e.target.name === 'textPriorityInput') {
      setPriorityValue(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todoValue, priorityValue);
    setTodoValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <div className="todoForm">
      <input
        type="text"
        name="textTodoInput"
        placeholder="enter task"
        onChange={handleChange}
        value={todoValue}
        onKeyDown={handleKeyDown}
      />
      <button className="todoButton" type="submit" onClick={onSubmit}>
        add
      </button>
      <input
        type="range"
        name="textPriorityInput"
        min="1"
        max="10"
        step="1"
        onChange={handleChange}
        value={priorityValue}
      />
      <div className="priorityValue">Priority: {priorityValue}</div>
    </div>
  );
};

export default TodoForm;
