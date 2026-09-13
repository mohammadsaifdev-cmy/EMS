import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

  return (
    <div
      id="tasklist"
      className="h-[56%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >

      {data.tasks.map((element, index) => {

        if (element.newTask) {
          return <NewTask key={index} data={element} />
        }

        if (element.completed) {
          return <CompleteTask key={index} data={element} />
        }

        if (element.failed) {
          return <FailedTask key={index} data={element} />
        }

        if (element.active) {
          return <AcceptTask key={index} data={element} />
        }

        return null
      })}

    </div>
  )
}

export default TaskList