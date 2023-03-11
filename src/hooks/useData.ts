import { useEffect, useState } from 'react'
import { TaskType, Status } from '../types/TaskType'

export function useData(groupId: string) {
  const [data, setData] = useState<TaskType[]>(getDataFromStorage())
  console.log('🚀 ~ file: useData.ts:6 ~ useData ~ data:', data)

  useEffect(() => {
    setDataToStorage(data)
  }, [data])

  const groupTasks = data.filter((item) => item.groupId === groupId)
  console.log('🚀 ~ file: useData.ts:17 ~ useData ~ groupTasks:', groupTasks)

  function addTask(task: TaskType) {
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

function getDataFromStorage(): TaskType[] {
  return JSON.parse(localStorage.getItem('todos') ?? '[]')
}

function setDataToStorage(data: TaskType[]) {
  localStorage.setItem('todos', JSON.stringify(data))
}
