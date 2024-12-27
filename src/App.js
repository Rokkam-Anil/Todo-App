import React from 'react';
import './App.css'; // Add styles for checkboxes and stars if needed
import { CiBellOn } from "react-icons/ci";
import { GrSync } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import  { IoMdArrowDropdown } from "react-icons/io";
import Profile from './components/Profile';
import Navbar from './components/Navbar';


const Task = ({ task, checked, starred }) => (
  <div className="task">
    <input
      type="checkbox"
      checked={checked}
      style={{ marginRight: '10px' }}
      readOnly
    />
    <span>{task}</span>
    <span
      className="star text-3xl"
      style={{ marginLeft: 'auto', color: starred ? 'black' : 'gray' }}
    >
      {starred ? '\u2605' : '\u2606'}
    </span>
  </div>
);

const MainContent = () => {
  // State to manage tasks
  const tasks = [
    { id: 1, task: 'Buy groceries', checked: false, starred: false, },
    { id: 2, task: 'Finish project report', checked: false, starred: true },
    { id: 3, task: 'Call the bank', checked: false, starred: false },
    { id: 4, task: 'Schedule dentist appointment', checked: false, starred: false },
    { id: 5, task: 'Plan weekend trip', checked: false, starred: false },
    { id: 6, task: 'Read a book', checked: true, starred: false },
    { id: 7, task: 'Clean the house', checked: true, starred: false },
    { id: 8, task: 'Prepare presentation', checked: true, starred: false },
    { id: 9, task: 'Update blog', checked: true, starred: false },
  ];

  return (
    <div className="main-content">
      <div className='flex items-center space-x-2'><p>To Do</p> <IoMdArrowDropdown /></div>
      <div className="header border-t-2 pt-9">
        <div className="flex-col space-y-7 pl-3 bg-auto">
          <div className='text-sm'>Add Task</div>
          <div className="flex space-x-3"><CiBellOn /> <GrSync /> <CiCalendar /></div>
        </div>
        <div className="h-19 items-start bg-stone-300 text-green-700 rounded-md mt-12"><button>Add Task</button></div>
      </div>
      <div className="tasks">
        {tasks.map((t) => (
          <Task
            key={t.id}
            task={t.task}
            checked={t.checked}
            starred={t.starred}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <Navbar/>
    <div className="con_first">
    <Profile/>
    <MainContent />
  </div>
  </div>
);

export default App;
