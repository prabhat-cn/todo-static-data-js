import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { MdOutlineFileDownloadDone } from 'react-icons/md';
import { AiOutlineFileDone, AiOutlineArrowLeft } from 'react-icons/ai';

const Todo = ({ todos, completeDoneTodo, removeTodo, updateTodo }) => {
  const [editTodo, setEditTodo] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (valueData) => {
    updateTodo(editTodo.id, valueData);
    setEditTodo({
      id: null,
      value: '',
    });
  };

  if (editTodo.id) {
    return <TodoForm editTodo={editTodo} onSubmit={submitUpdate} />;
  }

  return (
    <div className="container">
      <div className="row">
        {todos.length == 0 ? (
          <h3 style={{ color: 'white', fontSize: 20 }}>
            No task executed! Please add some task.
          </h3>
        ) : (
          <>
            {' '}
            <div className="col-md-6 active-column">
              <div className="active-col-inner">
                <h4 style={{ color: 'orange' }}>Active todos</h4>
                {todos.map((todo, index) => (
                  <>
                    {todo.isComplete ? (
                      ''
                    ) : (
                      <>
                        <div
                          className={
                            todo.isComplete ? 'todo-row complete' : 'todo-row'
                          }
                          key={index}
                        >
                          <div
                            key={todo.id}
                            onClick={() => completeDoneTodo(todo.id)}
                          >
                            {todo.text}
                          </div>
                          <div className="icons">
                            <MdOutlineFileDownloadDone
                              onClick={() => completeDoneTodo(todo.id)}
                            />
                            &nbsp;
                            <TiEdit
                              onClick={() =>
                                setEditTodo({ id: todo.id, value: todo.text })
                              }
                              className="edit-icon"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="col-md-6 completed-column">
              {/* new todos */}
              <div className="completed-col-inner">
                <h4 style={{ color: 'green' }}>Completed todos</h4>

                {todos &&
                  todos.map((data, index) => (
                    <>
                      {data.isComplete ? (
                        <>
                          <div
                            className={
                              data.isComplete ? 'done-row' : 'todo-row complete'
                            }
                            key={index}
                          >
                            <div
                              key={data.id}
                              onClick={() => completeDoneTodo(data.id)}
                            >
                              {data.text}
                            </div>
                            <div className="icons">
                              <AiOutlineArrowLeft
                                onClick={() => completeDoneTodo(data.id)}
                              />
                              &nbsp;
                              <RiCloseCircleLine
                                onClick={() => removeTodo(data.id)}
                                className="delete-icon"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        ''
                      )}
                    </>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
