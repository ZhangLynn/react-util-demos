import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';

import './style.css';

const Todos = () => {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default Todos
