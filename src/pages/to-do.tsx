import Image from 'next/image'
import { RxDotsHorizontal } from 'react-icons/rx'

import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Task } from '@/components/Task/Task'
import { useAuth } from '@/contexts/AuthContext'
import { tasks } from '@/database/tasks'

export default function Auth() {
  const { user } = useAuth()

  const backlogTask = tasks.filter((task) => task.status === 'backlog')
  const inProcessTask = tasks.filter((task) => task.status === 'inProgress')
  const toDoTask = tasks.filter((task) => task.status === 'toDo')
  const doneTask = tasks.filter((task) => task.status === 'done')

  return (
    <ProtectedRoute>
      <Header />
      <div className="flex text-black">
        <div className="w-72 border-r border-darkGray bg-background">
          <div className="flex items-center border-b p-6">
            <Image
              className="cursor-pointer rounded-full"
              src={user?.avatar ?? ''}
              alt="User Avatar"
              objectFit="cover"
              width={50}
              height={50}
            />
            <div className="px-4">
              <p className="font-bold">{user?.name}</p>
              <p className="text-darkGray">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between bg-background text-black">
          <div className="flex h-screen flex-1 flex-col px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-lg font-bold">Backlog Tasks</h1>
                <p className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-backlog text-center text-sm font-bold text-backlog">
                  5
                </p>
              </div>
              <RxDotsHorizontal
                size={20}
                className="cursor-pointer text-darkGray"
              />
            </div>
            {backlogTask.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </div>

          <div className="flex h-screen flex-1 flex-col px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-lg font-bold">To Do Tasks</h1>
                <p className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-toDo text-center text-sm font-bold text-toDo">
                  3
                </p>
              </div>
              <RxDotsHorizontal
                size={20}
                className="cursor-pointer text-darkGray"
              />
            </div>
            {toDoTask.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </div>

          <div className="flex h-screen flex-1 flex-col px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-lg font-bold">In Progress</h1>
                <p className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-inProcess text-center text-sm font-extrabold text-inProcess">
                  2
                </p>
              </div>
              <RxDotsHorizontal
                size={20}
                className="cursor-pointer text-darkGray"
              />
            </div>
            {inProcessTask.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </div>

          <div className="flex h-screen flex-1 flex-col px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-lg font-bold">Done</h1>
                <p className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-done text-center text-sm font-bold text-done">
                  5
                </p>
              </div>
              <RxDotsHorizontal
                size={20}
                className="cursor-pointer text-darkGray"
              />
            </div>
            {doneTask.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
