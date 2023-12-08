import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/Button'
import { useAuth } from '@/contexts/AuthContext'
import { githubURLAuth } from '@/utils/githubURLAuth'
import { googleURLAuth } from '@/utils/googleURLAuth'

export default function Login() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  function handleSocialLogin(key: string) {
    if (key === 'google') {
      router.push(googleURLAuth())
    } else {
      router.push(githubURLAuth())
    }
  }

  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (isAuthenticated) {
      router.push('/to-do') // Redireciona para a página de /to-do se já estiver autenticado
    }
  }, [isAuthenticated, router])

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-dark p-8">
      <div className="w-full max-w-md rounded bg-gray-200 p-8 shadow-md">
        <h1 className="mb-6 text-center text-6xl font-semibold text-black">
          Login
        </h1>
        <p className="mb-6 text-center font-semibold text-black">
          Escolha uma maneira de fazer login
        </p>
        <Button
          icon={<FcGoogle size={32} className="mx-2" />}
          text="Google"
          className="mt-8 flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 text-black"
          onClick={() => handleSocialLogin('google')}
        />

        <Button
          icon={<FaGithub size={32} className="mx-2" />}
          text="Github"
          className="mt-8 flex w-full items-center justify-center rounded-lg bg-github px-8 py-4"
          onClick={() => handleSocialLogin('github')}
        />
      </div>
    </div>
  )
}
