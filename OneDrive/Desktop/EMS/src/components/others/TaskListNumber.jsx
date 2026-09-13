import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='px-4 py-8 rounded-lg w-[45%] bg-gray-500'>
            <h2 className='text-3xl font-bold'>{data.taskCount.newTask}</h2>
            <h2 className='text-xl font-medium '>New Task</h2>
        </div>
        <div className='px-4 py-8 rounded-lg w-[45%] bg-gray-600'>
            <h2 className='text-3xl font-bold'>{data.taskCount.completed}</h2>
            <h2 className='text-xl font-medium '>Completed Task</h2>
        </div>
        <div className='px-4 py-8 rounded-lg w-[45%] bg-gray-700'>
            <h2 className='text-3xl font-bold'>{data.taskCount.active}</h2>
            <h2 className='text-xl font-medium '>Active Task</h2>
        </div>
        <div className='px-4 py-8 rounded-lg w-[45%] bg-gray-800'>
            <h2 className='text-3xl font-bold'>{data.taskCount.failed}</h2>
            <h2 className='text-xl font-medium '>Failed Task</h2>
        </div>
      
    </div>
  )
}

export default TaskListNumber
