import React from 'react'
import TaskSubHeader from './Components/TaskSubHeader'
import TeskHeader from './Components/TeskHeader';
import TaskList from './Components/TaskList';

const AllTask = () => {
  return (
    <div className='bg-slate-50 w-full p-10'>
       <TeskHeader/>
       <TaskSubHeader/>
       <TaskList/>
    </div>
  )
}

export default AllTask;