import { TaskType } from '../../types/TaskType'

interface PropsType {
  todo: TaskType
  pendingTask(taskIdToPending: string): void
}
export const DoneTasks = ({ todo, pendingTask }: PropsType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let isChecked = event.target.checked

    if (isChecked === false) return pendingTask(todo.id)
  }

  return (
    <div className='w-full flex border border-blue-400 p-2 my-2 rounded-md  justify-between'>
      <div className='flex '>
        <input type='checkbox' defaultChecked={true} onChange={handleChange} />
        <div className='flex flex-col ml-4'>
          <h1>{todo.title}</h1>
          <h2>{todo.creationDate}</h2>
        </div>
      </div>
    </div>
  )
}
