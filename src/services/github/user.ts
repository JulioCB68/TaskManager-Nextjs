import axios from 'axios'

import { GithubUserData } from '../types'

export async function getGithubUser(accessToken: string): Promise<User> {
  try {
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const user = userResponse.data

    return middleware(user)
  } catch (error) {
    throw new Error(`Error fetching user data: ${error}`)
  }
}

function middleware(userData: GithubUserData) {
  return {
    id: String(userData.id),
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar_url,
  }
}
