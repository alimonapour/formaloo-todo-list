import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { v4 as uuidv4 } from 'uuid'
import { Status, TaskType } from '../../../types/TaskType'
import { NewTask } from '../../new-task'
import { TodoTask } from '../../todo-task'
import { twMerge } from 'tailwind-merge'
import { DoneTasks } from '../../done-tasks'

interface PropTypes {
  groupId: string
  groupTitle: string
}

export const GroupTasks = ({ groupId, groupTitle }: PropTypes) => {
  const [ShowNewTaskForm, setShowNewTaskForm] = useState(false)
  const [task, setTask] = useState<string>('')
  const [todoList, setTodoList] = useState<TaskType[]>([])
  const [doneTodoList, setDoneTodoList] = useState<TaskType[]>([])

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
      groupId: groupId,
    }
    setTodoList([...todoList, newTask])
    setTask('')
  }

  const removeTask = (taskIdToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskIdToDelete
      }),
    )
  }

  const changeTaskStatusToDone = (taskIdToDone: string): void => {
    const [doneTask] = todoList.filter((task) => {
      return task.id === taskIdToDone
    })
    setDoneTodoList([...doneTodoList, doneTask])
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskIdToDone
      }),
    )
  }

  const changeTaskStatusToPending = (taskIdToPending: string): void => {
    const [doneTask] = doneTodoList.filter((task) => {
      return task.id === taskIdToPending
    })
    setTodoList([...todoList, doneTask])
    setDoneTodoList(
      doneTodoList.filter((task) => {
        return task.id !== taskIdToPending
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
        {todoList.map((todo: TaskType) => {
          return (
            <TodoTask
              key={todo.id}
              todo={todo}
              removeTask={removeTask}
              doneTask={changeTaskStatusToDone}
            />
          )
        })}

        <div
          className={twMerge(
            'border-t-2 border-indigo-500',
            doneTodoList.length === 0 && 'hidden',
          )}
        >
          {doneTodoList.length > 0 &&
            doneTodoList.map((todo: TaskType) => {
              return (
                <DoneTasks
                  key={todo.id}
                  todo={todo}
                  pendingTask={changeTaskStatusToPending}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
