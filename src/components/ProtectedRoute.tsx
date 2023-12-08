import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '@/contexts/AuthContext'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (!isAuthenticated) {
      router.push('/login') // Redireciona para a página de login se não estiver autenticado
    }
  }, [isAuthenticated, router])

  // Renderiza o conteúdo da rota protegida APENAS se estiver autenticado
  return isAuthenticated ? <>{children}</> : null
}
