import { destroyCookie, parseCookies } from 'nookies'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getGithubToken } from '@/services/github/githubToken'
import { getGithubUser } from '@/services/github/user'
import { getUserGoogle } from '@/services/google/getUserGoogle'

interface IAuthContext {
  user: User | null
  isAuthenticated: boolean
  loginWithGoogle: (accessToken: string) => void
  loginWithGithub: (accessToken: string) => void
  logout: () => void
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const cookies = parseCookies()

  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => !!cookies.access_token,
  )

  const {
    setItemInLocalStorage,
    getItemInLocalStorage,
    removeItemInLocalStorage,
  } = useLocalStorage()

  useEffect(() => {
    setIsAuthenticated(!!cookies.access_token)
    if (isAuthenticated) {
      if (getItemInLocalStorage('login_mode') === 'google') {
        getUserGoogle(cookies.access_token).then((response) =>
          setUser(response),
        )
      } else {
        getGithubUser(cookies.access_token).then((response) =>
          setUser(response),
        )
      }
    }
  }, [isAuthenticated])

  async function loginWithGoogle(accessToken: string) {
    try {
      const userData = await getUserGoogle(accessToken)
      setIsAuthenticated(true)
      setUser(userData)
      setItemInLocalStorage('login_mode', 'google')
    } catch (error) {
      console.error('loginWithGoogle Error fetching user data:', error)
    }
  }

  async function loginWithGithub(code: string) {
    try {
      const userData = await getGithubToken(code)
      setIsAuthenticated(true)
      setUser(userData)
      setItemInLocalStorage('login_mode', 'github')
    } catch (error) {
      console.error('loginWithGithub Error fetching user data:', error)
      throw error
    }
  }

  function logout() {
    destroyCookie(null, 'access_token')
    removeItemInLocalStorage('login_mode')
    setIsAuthenticated(false)
    setUser(null)
  }

  const contextValue: IAuthContext = {
    user,
    isAuthenticated,
    loginWithGoogle,
    loginWithGithub,
    logout,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
