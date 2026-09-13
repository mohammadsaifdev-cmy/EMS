import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-[100%]'>
      <div className='flex-shrink-0 h-full w-[300px] bg-gray-700 rounded-xl'>
        <div className='flex justify-between p-2 items-center'>
            <h2 className='bg-red-400 text-sm px-3 py-1 rounded'>{data.category}</h2>
            <h4>{data.taskDate}</h4>
        </div>
        <h2 className='text-lg mt-5 px-3 font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-5 px-2'>
            {data.taskDescription}
        </p>
        <div className='flex justify-between mt-20'>
            <button className='bg-red-500 mx-auto w-[60%] rounded py-1 px-2 text-sm'>Failed Task</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask
