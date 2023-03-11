import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { TrashIcon } from '@heroicons/react/24/solid'
import { ITask as TaskType, Status } from '../../types/Task'

interface Props {
  todo: TaskType
  removeTask(taskIdToDelete: string): void
  toggleTaskStatus(taskIdToDone: string): void
}

export const Task: FC<Props> = ({ todo, removeTask, toggleTaskStatus }) => {
  const formattedCreatedAt = new Date(todo.createdAt).toLocaleString()

  return (
    <div
      className={twMerge(
        'w-full flex border p-2 my-2 rounded-md  justify-between bg-gradient-to-r from-sky-500 to-indigo-500 text-white',
        todo.status === Status.done &&
          'bg-gradient-to-r from-gray-500 to-gray-700 ',
      )}
    >
      <div className='flex'>
        <input
          className='cursor-pointer'
          type='checkbox'
          checked={todo.status === Status.done}
          onChange={() => toggleTaskStatus(todo.id)}
        />
        <div className='flex flex-col ml-4'>
          <h1 className='text-md font-medium leading-5'>{todo.title}</h1>
          <h2 className='text-sm font-medium leading-5 opacity-30'>
            {formattedCreatedAt}
          </h2>
        </div>
      </div>
      {todo.status !== Status.done && (
        <div className='flex items-center'>
          <TrashIcon
            onClick={() => {
              removeTask(todo.id)
            }}
            className='h-5 w-5 text-white hover:text-red-500 cursor-pointer text-center'
          />
        </div>
      )}
    </div>
  )
}
