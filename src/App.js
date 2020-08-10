import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoForm from './componenets/todoform';

function App() {
  return (
    <div className="container m-5">
      <div className="center">
        <h1 className="display-4 text-center">To do List</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
