// Card.jsx
import React, { useState } from 'react';

function Card({ todo, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedStatus, setEditedStatus] = useState(todo.status);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleEdit = () => {
    onEdit(editedName, editedDescription, editedStatus);
    setIsEditing(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownSelect = (status) => {
    setEditedStatus(status);
    handleDropdownToggle();
  };

  return (
    <div className="col-4">
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  onClick={handleDropdownToggle}
                >
                  {editedStatus}
                </button>
                <ul
                  className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                  aria-labelledby={`statusDropdown${todo.id}`}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleDropdownSelect('Completed')}
                    >
                      Completed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleDropdownSelect('Not Completed')}
                    >
                      Not Completed
                    </a>
                  </li>
                </ul>
              </div>
              <button type="button" onClick={handleEdit}>
                Save
              </button>
            </>
          ) : (
            <>
              <h6 className="card-title">Name: {todo.name}</h6>
              <h6 className="card-subtitle mb-2">Description: {todo.description}</h6>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  onClick={handleDropdownToggle}
                >
                  {todo.status}
                </button>
                <ul
                  className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                  aria-labelledby={`statusDropdown${todo.id}`}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleDropdownSelect('Completed')}
                    >
                      Completed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleDropdownSelect('Not Completed')}
                    >
                      Not Completed
                    </a>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="btn btn-primary edit"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button type="button" className="btn btn-danger delete" onClick={onDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
