import React from 'react'

const AcceptTask = ({data}) => {
  
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
        <div className='flex justify-between mt-20 ml-4 mr-4'>
            <button className='bg-green-500 rounded py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 rounded py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
