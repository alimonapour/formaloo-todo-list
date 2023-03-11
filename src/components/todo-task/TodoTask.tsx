import { TrashIcon } from '@heroicons/react/24/solid'
import { TaskType } from '../../types/TaskType'

interface PropsType {
  todo: TaskType
}

export const TodoTask = ({ todo }: PropsType) => {
  return (
    <div className='w-full flex border p-2 my-2 rounded-md border-blue-400 justify-between'>
      <div className='flex'>
        <input type='checkbox' />
        <div className='flex flex-col ml-4'>
          <h1>{todo.title}</h1>
          <h2>{todo.creationDate}</h2>
        </div>
      </div>
      <div className='flex items-center'>
        <TrashIcon
          onClick={() => console.log('hello')}
          className='h-4 w-4 text-red-500 cursor-pointer text-center'
        />
      </div>
    </div>
  )
}
