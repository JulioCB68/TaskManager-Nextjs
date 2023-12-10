import Image from 'next/image'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

import { useAuth } from '@/contexts/AuthContext'

import { Button } from './Button'

export function Header() {
  const router = useRouter()
  const cookies = parseCookies()
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    router.replace('/login')
  }

  return (
    <header className="flex items-center justify-between bg-github px-6 py-4 text-white">
      <h1 className="text-xl font-semibold">Task Manager Dev</h1>
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                className="cursor-pointer"
                src={user?.avatar}
                alt="User Avatar"
                objectFit="cover"
                width={50}
                height={50}
              />
            </div>
            <span className="hidden md:inline-block">{user.name}</span>
            <Button
              text="Logout"
              className="flex items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={handleLogout}
            />
          </div>
        )}
      </div>
    </header>
  )
}
