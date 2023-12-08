import { destroyCookie, parseCookies } from 'nookies'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getUserGoogle } from '@/services/getUserGoogle'
import { getGithubToken } from '@/services/githubToken'

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
    () => !!cookies.access_token_google || !!cookies.access_token_github,
  )

  useEffect(() => {
    setIsAuthenticated(
      !!cookies.access_token_google || !!cookies.access_token_github,
    )
    console.log(isAuthenticated)
  }, [
    cookies.access_token_github,
    cookies.access_token_google,
    isAuthenticated,
  ])

  async function loginWithGoogle(accessToken: string) {
    try {
      const userData = await getUserGoogle(accessToken)
      setIsAuthenticated(true)
      setUser(userData)
    } catch (error) {
      console.error('loginWithGoogle Error fetching user data:', error)
    }
  }

  async function loginWithGithub(code: string) {
    try {
      const userData = await getGithubToken(code)
      setIsAuthenticated(true)
      setUser(userData)
    } catch (error) {
      console.error('loginWithGithub Error fetching user data:', error)
      throw error
    }
  }

  function logout() {
    Object.keys(cookies).forEach((cookieName) => {
      destroyCookie(null, cookieName)
    })
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
