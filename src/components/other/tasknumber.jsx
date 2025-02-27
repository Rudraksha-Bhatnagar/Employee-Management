import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='rounded-xl w-[45%] bg-red-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>
                {data.taskCount.new_task}
            </h2>
            <h3 className='text-xl font-medium'>
                New Task
            </h3>
        </div>
        <div className='rounded-xl w-[45%] bg-blue-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>
            {data.taskCount.completed}
            </h2>
            <h3 className='text-xl font-medium'>
                completed Task
            </h3>
        </div>
        <div className='rounded-xl w-[45%] bg-green-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>
            {data.taskCount.failed}
            </h2>
            <h3 className='text-xl font-medium'>
                failed Task
            </h3>
        </div>
        <div className='rounded-xl w-[45%] bg-yellow-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>
            {data.taskCount.active}
            </h2>
            <h3 className='text-xl font-medium'>
                Accepted Task
            </h3>
        </div>
        
    </div>
  )
}

export default TaskNumbers