import { MdInsertComment } from 'react-icons/md'

import { Tags } from './Tags'

interface ITaskProps {
  task: Task
}

export function Task({ task }: ITaskProps) {
  return (
    <div className="py-12">
      <div className="cursor-pointer rounded-md bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="font-bold">{task.name}</p>
          <p className="underline">{task.createdAt}</p>
        </div>
        <div className="items-center justify-between">
          <div className="my-4 flex">
            <Tags id labelId={`#000${task.id}`} />
            <Tags status={task.status} />
          </div>
          <div className="flex items-center justify-end">
            <MdInsertComment
              className={`${
                task.status === 'done'
                  ? 'cursor-pointer pl-1 font-semibold text-gray-400'
                  : 'text-shadowBlue cursor-pointer pl-1 font-semibold'
              }`}
            />
            <p
              className={`${
                task.status === 'done'
                  ? 'pl-1 font-semibold text-gray-400'
                  : 'text-shadowBlue pl-1 font-semibold'
              }`}
            >
              {task.comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
