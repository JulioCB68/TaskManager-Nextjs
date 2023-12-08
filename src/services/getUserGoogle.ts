import axios from 'axios'

import { GoogleUserProfile } from './types'

export async function getUserGoogle(accessToken: string): Promise<User> {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    return middleware(response.data)
  } catch (error) {
    throw new Error(`Error fetching user data: ${error}`)
  }
}

function middleware(userData: GoogleUserProfile) {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    avatar: userData.picture,
  }
}
