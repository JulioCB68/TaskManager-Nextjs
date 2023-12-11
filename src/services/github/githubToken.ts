import axios from 'axios'

import { GithubUserData } from '../types'

export const getGithubToken = async (token: string): Promise<User> => {
  const response = await axios.get('/api/github-token', {
    params: {
      code: token,
    },
  })
  return middleware(response.data)
}

function middleware(userData: GithubUserData) {
  return {
    id: String(userData.id),
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar_url,
  }
}
