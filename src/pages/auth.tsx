import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

import { useAuth } from '@/contexts/AuthContext'
import { getAccessTokenFromHashFragmentURL } from '@/utils/getGoogleAccessToken'

export default function Auth() {
  const router = useRouter()
  const { mode, code } = router.query
  const { isAuthenticated, loginWithGoogle, loginWithGithub } = useAuth()

  const cookies = parseCookies()

  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (!isAuthenticated) {
      // Se não estiver autenticado, faz login
      if (mode === 'github') {
        // Verifica a flag do Login
        loginWithGithub(String(code))
        router.replace('/to-do')
      } else {
        getAccessTokenFromHashFragmentURL('access_token') // Salva o access_token nos cookies (ainda é necessário fazer autenticação)
      }
    } else {
      router.push('/to-do') // Redireciona para a página de /to-do se estiver autenticado
    }
  }, [code, mode])

  // Um useEffect para lidar com o login do Google após a obtenção do access_token nos cookies
  useEffect(() => {
    if (mode === 'google') {
      loginWithGoogle(cookies.access_token)
      router.replace('/to-do')
    }
  }, [code, cookies.access_token, mode])
}
