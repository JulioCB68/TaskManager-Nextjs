import { ReactNode } from 'react'
import { RxDotsHorizontal } from 'react-icons/rx'

import { statusBackgrounds, statusColors } from './utils/taskStatusHelpers'

interface ISectionTaskProps {
  title: string
  lenght: number
  dragInDropId: StatusType
  children: ReactNode
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  handleDrop: (status: StatusType) => void
}

export function SectionTask({
  title,
  lenght,
  dragInDropId,
  children,
  handleDragOver,
  handleDrop,
}: ISectionTaskProps) {
  const backgroundClass = dragInDropId ? statusBackgrounds[dragInDropId] : ''
  const colorClass = dragInDropId ? statusColors[dragInDropId] : ''
  return (
    <div
      className="flex h-screen flex-1 flex-col px-8 py-4"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={() => handleDrop(dragInDropId)}
    >
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-lg font-bold">{title}</h1>
          <p
            className={`ml-2 flex h-5 w-5 items-center justify-center rounded-full text-center text-sm font-bold ${backgroundClass} ${colorClass}`}
          >
            {lenght}
          </p>
        </div>
        <RxDotsHorizontal size={20} className="cursor-pointer text-darkGray" />
      </div>
      {children}
    </div>
  )
}
