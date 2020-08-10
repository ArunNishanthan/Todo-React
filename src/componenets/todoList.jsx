import React from 'react';

export default function TodoList({ todos, onDelete }) {
  return (
    <React.Fragment>
      {todos.map((element) => {
        return (
          <div key={element.date} className="card">
            <div className="card-body">
              {element.name}
              <button
                onClick={() => onDelete(element)}
                className="btn btn-danger btn-sm rightButton"
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
