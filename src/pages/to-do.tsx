import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { LuArrowBigUpDash } from 'react-icons/lu'

import { ProtectedRoute } from '@/auth/ProtectedRoute'
import { Actions } from '@/components/Actions'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Nav } from '@/components/NavItem/Nav'
import { SectionTask } from '@/components/Task/SectionTask'
import { Task } from '@/components/Task/Task'
import { useAuth } from '@/contexts/AuthContext'
import { useDragInDrop } from '@/hooks/useDragInDrop'

export default function ToDo() {
  const { user, logout } = useAuth()

  const { tasks, handleDragStart, handleDragOver, handleDrop } = useDragInDrop()

  const router = useRouter()

  function handleLogout() {
    logout()
    router.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="flex text-black">
        <div className="flex w-72 flex-col items-start justify-between border-r border-darkGray bg-background">
          <div className="flex flex-col">
            <div className="flex items-center p-4 pb-12">
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
            <Nav />
          </div>

          <div className="w-full p-4">
            <Button
              text="Logout"
              className="mb-4 flex w-full items-center justify-center rounded-lg bg-red-500 py-4 text-white hover:bg-red-900"
              icon={<FaArrowRightFromBracket className="mr-2" />}
              onClick={handleLogout}
            />
            <Button
              text="Upgrade to Pro"
              className="flex w-full items-center justify-center rounded-lg bg-greenGT px-12 py-4 text-white hover:bg-emerald-700"
              icon={<LuArrowBigUpDash className="mr-2" />}
            />
          </div>
        </div>

        <div className="flex-1 bg-background text-black">
          <Actions />

          <div className="flex items-center justify-between">
            <SectionTask
              dragInDropId="backlog"
              handleDragOver={(e) => handleDragOver(e)}
              handleDrop={() => handleDrop('backlog')}
              title="Backlog Taks"
              lenght={tasks.filter((task) => task.status === 'backlog').length}
            >
              {tasks
                .filter((task) => task.status === 'backlog')
                .map((task, index) => (
                  <Task key={index} task={task} onDragStart={handleDragStart} />
                ))}
            </SectionTask>

            <SectionTask
              dragInDropId="toDo"
              handleDragOver={(e) => handleDragOver(e)}
              handleDrop={() => handleDrop('toDo')}
              title="To do Tasks"
              lenght={tasks.filter((task) => task.status === 'toDo').length}
            >
              {tasks
                .filter((task) => task.status === 'toDo')
                .map((task, index) => (
                  <Task key={index} task={task} onDragStart={handleDragStart} />
                ))}
            </SectionTask>

            <SectionTask
              dragInDropId="inProgress"
              handleDragOver={(e) => handleDragOver(e)}
              handleDrop={() => handleDrop('inProgress')}
              title="In Progress Tasks"
              lenght={
                tasks.filter((task) => task.status === 'inProgress').length
              }
            >
              {tasks
                .filter((task) => task.status === 'inProgress')
                .map((task, index) => (
                  <Task key={index} task={task} onDragStart={handleDragStart} />
                ))}
            </SectionTask>

            <SectionTask
              dragInDropId="done"
              handleDragOver={(e) => handleDragOver(e)}
              handleDrop={() => handleDrop('done')}
              title="Done"
              lenght={tasks.filter((task) => task.status === 'done').length}
            >
              {tasks
                .filter((task) => task.status === 'done')
                .map((task, index) => (
                  <Task key={index} task={task} onDragStart={handleDragStart} />
                ))}
            </SectionTask>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return ProtectedRoute(context)
}
