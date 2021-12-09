import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoData) => {
    if (!todoData.text || /^\s*$/.test(todoData.text)) {
      return;
    }
    const newTodos = [todoData, ...todos];
    localStorage.setItem('addedTodo', JSON.stringify(newTodos));

    setTodos(newTodos);
    console.log('newTodos', todoData);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    console.log('removeArr', removeArr);
    setTodos(removeArr);
  };

  const completeDoneTodo = (id) => {
    let completedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(completedTodo);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeDoneTodo={completeDoneTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
