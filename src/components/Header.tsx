import Image from 'next/image'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

import { useAuth } from '@/contexts/AuthContext'

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
          <Image
            className="cursor-pointer rounded-full"
            src={user?.avatar ?? ''}
            alt="User Avatar"
            objectFit="cover"
            width={40}
            height={40}
          />
        )}
      </div>
    </header>
  )
}
