import '../Styles/bodyStyle.css';
import { useState } from 'react';
import PopUp from './popupComponent';
import Todo from './TodoItem';

function TodoBody({ task }) {
  // console.log(`In body component for task: ${task}`);

  return (
    <div className="todoBody">
      <Todo task={task} />
    </div>
  );
}

export default TodoBody;
