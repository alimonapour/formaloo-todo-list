import { useEffect, useState } from 'react'
import { ITask, Status } from '../types/Task'

export function useTasks(groupId: string) {
  const [data, setData] = useState<ITask[]>(getDataFromStorage())

  useEffect(() => {
    setDataToStorage(data)
  }, [data])

  const groupTasks = data
    .filter((item) => item.groupId === groupId)
    .sort((a, b) => {
      if (a.status === b.status) {
        if (a.status === Status.pending) {
          return (b.createdAt ?? 0) - (a.createdAt ?? 0)
        } else {
          return (b.updatedAt ?? 0) - (a.updatedAt ?? 0)
        }
      }
      return a.status - b.status
    })

  function addTask(task: ITask) {
    setData([task, ...data])
  }

  function removeTask(taskId: string) {
    const index = data.findIndex((item) => item.id === taskId)
    setData([...data.slice(0, index), ...data.slice(index + 1)])
  }

  function toggleTaskStatus(taskId: string) {
    const task = data.find((item) => item.id === taskId)
    if (task) {
      task.status =
        task.status === Status.pending ? Status.done : Status.pending
      task.updatedAt = Date.now()
      setData([...data])
    }
  }

  return {
    tasks: groupTasks,
    addTask,
    removeTask,
    toggleTaskStatus,
  }
}

function getDataFromStorage(): ITask[] {
  return JSON.parse(localStorage.getItem('todos') ?? '[]')
}

function setDataToStorage(data: ITask[]) {
  localStorage.setItem('todos', JSON.stringify(data))
}
