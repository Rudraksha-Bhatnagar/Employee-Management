import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompletedTask from './CompletedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap'>
        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <AcceptTask key={idx}  data={e} />
            }
            if(e.new_task){
                return <NewTask key={idx} data={e} />

            }
            if(e.completed){
                return <CompletedTask key={idx} data={e} />
            }
            if(e.failed){
                return <FailedTask  key={idx} data={e} />
            }
        })}

    </div>
  )
}

export default TaskList