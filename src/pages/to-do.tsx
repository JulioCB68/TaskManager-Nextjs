import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { ProtectedRoute } from '@/auth/ProtectedRoute'
import { Actions } from '@/components/Actions'
import { Header } from '@/components/Header'
import { SectionTask } from '@/components/Task/SectionTask'
import { Task } from '@/components/Task/Task'
import { useAuth } from '@/contexts/AuthContext'
import { useDragInDrop } from '@/hooks/useDragInDrop'

export default function ToDo() {
  const { user } = useAuth()

  const { tasks, handleDragStart, handleDragOver, handleDrop } = useDragInDrop()

  return (
    <>
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
