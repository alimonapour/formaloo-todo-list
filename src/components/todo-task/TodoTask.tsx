import { TrashIcon } from '@heroicons/react/24/solid'
import { TaskType } from '../../types/TaskType'

interface PropsType {
  todo: TaskType
  removeTask(taskIdToDelete: string): void
  doneTask(taskIdToDone: string): void
}

export const TodoTask = ({ todo, removeTask, doneTask }: PropsType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let isChecked = event.target.checked
    if (isChecked) return doneTask(todo.id)
  }
  return (
    <div className='w-full flex border p-2 my-2 rounded-md border-blue-400 justify-between'>
      <div className='flex'>
        <input type='checkbox' onChange={handleChange} />
        <div className='flex flex-col ml-4'>
          <h1 className='text-md font-medium leading-5'>{todo.title}</h1>
          <h2 className='text-sm font-medium leading-5'>{todo.createdAt}</h2>
        </div>
      </div>
      <div className='flex items-center'>
        <TrashIcon
          onClick={() => {
            removeTask(todo.id)
          }}
          className='h-4 w-4 text-red-500 cursor-pointer text-center'
        />
      </div>
    </div>
  )
}
