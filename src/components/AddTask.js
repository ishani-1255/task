import React, { useState } from 'react';

function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const calculatePercentage = () => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter((task) => task.completed);
    return (completedTasks.length / tasks.length) * 100;
  };

  return (
    <div>
    <div className="container mx-auto py-8">
      <div className="max-w-xl ml-60 mt-10 bg-gray-100 p-6 rounded-md shadow-md mb-4">
        <nav className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center mb-4 rounded-t-md">
          <h1 className="text-2xl  px-4 py-4">My Tasks</h1>
          <div className="text-l">Task Completion: {calculatePercentage().toFixed(2)}%</div>
        </nav>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter task"
            className="border border-gray-300 rounded-md px-3 py-3 mr-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white items-center justify-center h-10 w-10 text-2xl pt-0 pb-1  rounded-full hover:bg-blue-700"
          >
            +
          </button>
        </div>
        {tasks.map((task, index) => (
          <div key={index} className="bg-white rounded-md overflow-hidden shadow-md mb-4">
            <div className="flex items-center px-4 py-2">
              <input
                type="text"
                value={task.task}
                onChange={(e) => {
                  const updatedTasks = [...tasks];
                  updatedTasks[index].task = e.target.value;
                  setTasks(updatedTasks);
                }}
                className={`border border-gray-300 rounded-md px-2 py-2 mr-2 flex-grow ${task.completed ? 'line-through decoration-blue-500' : ''}`}
              />
              <button
                onClick={() => handleTaskCompletion(index)}
                className={`text-white rounded-full h-8 w-8 flex items-center justify-center focus:outline-none ${task.completed ? 'bg-green-500' : 'bg-gray-300'} hover:bg-green-700 hover:bg-gray-400`}
              >
                {task.completed ? '✔' : ''}
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white rounded-full items-center justify-center h-8 w-8  ml-2 hover:bg-red-700"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </div>
      <footer className="bg-gray-200 py-7 mt-0 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p className="text-center text-gray-800">© 2024 Task Manager. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}

export default AddTask;
