import React from 'react'
import Header from '../other/header'
import TaskNumbers from '../other/tasknumber'
import TaskList from '../tasklist/TaskList'


const EmployeeDashboard = (props) => {
  
  return (

    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header data={props.data} changeuser={props.changeuser} />
        <TaskNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>

  )
}

export default EmployeeDashboard