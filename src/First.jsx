// First.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from './Card'; // Assuming Card component is in the same directory

function First() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleAddTodo = () => {
    if (todoName.trim() !== '' && todoDescription.trim() !== '') {
      const newTodo = {
        id: todos.length + 1, // Unique ID for each todo (you may want to handle IDs differently)
        name: todoName,
        description: todoDescription,
        status: 'Not Completed',
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoName('');
      setTodoDescription('');
    }
  };

  const handleEditTodo = (id, name, description, status) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, name, description, status } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filterTodos = () => {
    if (selectedFilter === 'All') {
      return todos;
    } else if (selectedFilter === 'Completed') {
      return todos.filter((todo) => todo.status === 'Completed');
    } else if (selectedFilter === 'Not Completed') {
      return todos.filter((todo) => todo.status === 'Not Completed');
    }
    return todos;
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="sec">
          <h2 className="head"> My Todo🖋</h2>
        </div>
        <input
          type="text"
          className="box"
          id="todoName"
          name="todoName"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          type="text"
          className="box"
          id="todoDescription"
          name="todoDescription"
          placeholder="Todo Description"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button type="button" className="btn btn-dark box-2" onClick={handleAddTodo}>
          Add Todo
        </button>
        <div className="sec2">
          <h3 className="head2">My Todos</h3>
          <h3 className="head3">Status Filter :</h3>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedFilter}
            </button>
            <div className="dropdown-menu">
              <a
                className="dropdown-item but1"
                href="#"
                onClick={() => handleFilterClick('All')}
              >
                All
              </a>
              <a
                className="dropdown-item but2"
                href="#"
                onClick={() => handleFilterClick('Completed')}
              >
                Completed
              </a>
              <a
                className="dropdown-item but3"
                href="#"
                onClick={() => handleFilterClick('Not Completed')}
              >
                Not Completed
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Displaying Todos */}
      <div className="row">
        {filterTodos().map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            onEdit={(name, description, status) =>
              handleEditTodo(todo.id, name, description, status)
            }
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </div>
    </>
  );
}

export default First;
