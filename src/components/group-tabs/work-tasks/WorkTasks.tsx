import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { v4 as uuidv4 } from 'uuid'
import { NewTask } from '../../new-task'
import { TaskType, Status } from '../../../types/TaskType'
import { TodoTask } from '../../todo-task/TodoTask'

export const WorkTasks = ({ groupTitle }: { groupTitle: string }) => {
  const [ShowNewTaskForm, setShowNewTaskForm] = useState(false)
  const [task, setTask] = useState<string>('')
  const [workTodoList, setWorkTodoList] = useState<TaskType[]>([])

  const date = new Date()
  const currentDate =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }

  const addTask = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: task,
      creationDate: currentDate,
      status: Status.pending,
      group: groupTitle,
    }
    setWorkTodoList([...workTodoList, newTask])
    setTask('')
  }

  const removeTask = (taskIdToDelete: string): void => {
    setWorkTodoList(
      workTodoList.filter((task) => {
        return task.id != taskIdToDelete
      }),
    )
  }

  return (
    <div>
      {!ShowNewTaskForm && (
        <div className='w-full flex items-center justify-center'>
          <PlusCircleIcon
            onClick={() => setShowNewTaskForm(true)}
            className='h-8 w-8 text-blue-500 cursor-pointer text-center'
          />
        </div>
      )}
      {ShowNewTaskForm && (
        <NewTask handleChange={handleChange} addTask={addTask} task={task} />
      )}
      <div>
        {workTodoList.map((todo: TaskType) => {
          return <TodoTask key={todo.id} todo={todo} removeTask={removeTask} />
        })}
      </div>
    </div>
  )
}
