import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import { Status, TaskType } from '../../../types/TaskType'
import { NewTask } from '../../new-task'
import { TodoTask } from '../../todo-task'
import { twMerge } from 'tailwind-merge'
import { DoneTasks } from '../../done-tasks'
import { useData } from '../../../hooks/useData'

interface PropTypes {
  groupId: string
}

export const GroupTasks = ({ groupId }: PropTypes) => {
  const [ShowNewTaskForm, setShowNewTaskForm] = useState(false)
  const [task, setTask] = useState<string>('')
  const [todoList, setTodoList] = useState<TaskType[]>([])
  const { tasks, addTask, removeTask, toggleTaskStatus } = useData(groupId)

  const [doneTodoList, setDoneTodoList] = useState<TaskType[]>([])

  const date = new Date()
  const currentDate =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }

  const addTaskHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: task,
      createdAt: currentDate,
      status: Status.pending,
      groupId: groupId,
    }
    addTask(newTask)
    setTask('')
  }

  const removeTaskHandler = (taskIdToDelete: string): void => {
    removeTask(taskIdToDelete)
  }

  const toggleTaskStatusHandler = (taskId: string) => {
    toggleTaskStatus(taskId)
  }

  const changeTaskStatusToDone = (taskIdToDone: string): void => {
    const [doneTask] = todoList.filter((task) => {
      return task.id === taskIdToDone
    })
    doneTask.status = Status.done
    doneTask.createdAt = currentDate
    setDoneTodoList([...doneTodoList, doneTask])
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskIdToDone
      }),
    )
  }

  const changeTaskStatusToPending = (taskIdToPending: string): void => {
    const [pendingTask] = doneTodoList.filter((task) => {
      return task.id === taskIdToPending
    })

    pendingTask.status = Status.pending
    setTodoList([...todoList, pendingTask])
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
        <motion.div
          className=''
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <NewTask
            handleChange={handleChange}
            addTask={addTaskHandler}
            task={task}
          />
        </motion.div>
      )}
      <div>
        {tasks.map((todo: TaskType) => {
          return (
            <motion.div
              key={todo.id}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 5, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <TodoTask
                todo={todo}
                removeTask={removeTaskHandler}
                toggleTaskStatus={toggleTaskStatusHandler}
              />
            </motion.div>
          )
        })}

        <div
          className={twMerge(
            'border-t-2 border-indigo-500 mt-2',
            doneTodoList.length === 0 && 'hidden',
          )}
        >
          {doneTodoList.length > 0 &&
            doneTodoList.map((todo: TaskType) => {
              return (
                <motion.div
                  key={todo.id}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 10, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <DoneTasks
                    todo={todo}
                    pendingTask={changeTaskStatusToPending}
                  />
                </motion.div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
