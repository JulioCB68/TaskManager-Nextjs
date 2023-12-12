import Image from 'next/image'
import { HiOutlineCalendar } from 'react-icons/hi'
import { MdInsertComment } from 'react-icons/md'

import { useAuth } from '@/contexts/AuthContext'

import { Tags } from './Tags'

interface ITaskProps {
  task: Task
  onDragStart: (task: Task) => void
}

export function Task({ task, onDragStart }: ITaskProps) {
  const { user } = useAuth()
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {
    e.dataTransfer.setData('task', JSON.stringify(task))
    onDragStart(task)
  }
  return (
    <div
      className="py-2"
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
    >
      <div className="cursor-pointer rounded-md bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="font-bold">{task.name}</p>
          <div className="flex items-center">
            <MdInsertComment
              className={`${
                task.status === 'done'
                  ? 'cursor-pointer pl-1 font-semibold text-gray-400'
                  : 'cursor-pointer pl-1 font-semibold text-shadowBlue'
              }`}
            />
            <p
              className={`${
                task.status === 'done'
                  ? 'pl-1 font-semibold text-gray-400'
                  : 'pl-1 font-semibold text-shadowBlue'
              }`}
            >
              {task.comments}
            </p>
          </div>
        </div>
        <div className="items-center justify-between">
          <div className="my-4 flex">
            <Tags id labelId={`#000${task.id}`} />
            <Tags status={task.status} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <HiOutlineCalendar size={16} className="mr-3 text-darkGray" />
              <p className="text-sm text-darkGray">{task.createdAt}</p>
            </div>
            <div className="flex items-center">
              <Image
                className="h-8 w-8 rounded-full object-cover"
                src={user?.avatar ?? ''}
                alt="User avatar"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
