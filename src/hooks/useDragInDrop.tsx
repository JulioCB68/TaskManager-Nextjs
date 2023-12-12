import { useState } from 'react'

import { tasks as allTaks } from '@/database/tasks'

export function useDragInDrop() {
  const [tasks, setTasks] = useState<Task[]>(allTaks)
  const [draggedTask, setDraggedTask] = useState<Task | null>(null)

  const handleDragStart = (task: Task) => {
    setDraggedTask(task)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (status: StatusType) => {
    if (draggedTask) {
      const updatedTasks = tasks.map((task) => {
        if (task === draggedTask) {
          return { ...task, status }
        }
        return task
      })

      setTasks(updatedTasks)
      setDraggedTask(null)
    }
  }

  return {
    tasks,
    draggedTask,
    handleDragStart,
    handleDragOver,
    handleDrop,
  }
}
