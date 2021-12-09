import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
  // const [input, setInput] = useState('');
  const [input, setInput] = useState(
    props.editTodo ? props.editTodo.value : ''
  );
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    // after add or submit clear input field
    setInput('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.editTodo ? (
          <>
            <input
              type="text"
              placeholder="Update current todo.."
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit">Update Todo</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a todo.."
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Add Todo</button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
