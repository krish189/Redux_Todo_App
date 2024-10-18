import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from './Redux/TodoSlice';

function TodoApp() {
  const [tasktext, setTaskText] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state)=>state.todos.tasks);

  const handleAddTask = () => {
    if (tasktext.trim()) {
      dispatch(addTask({ text: tasktext }));
      setTaskText('');
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask({ id }));
  };


  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={tasktext}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp