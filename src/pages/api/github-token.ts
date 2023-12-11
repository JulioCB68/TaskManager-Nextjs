import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

import { getGithubUser } from '@/services/github/user'

export default async function getAccessToken(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code } = req.query
  const accessTokenResponse = await axios.post(
    'https://github.com/login/oauth/access_token',
    null,
    {
      params: {
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        code: String(code),
      },
      headers: {
        Accept: 'application/json',
      },
    },
  )

  const { access_token: accessToken } = accessTokenResponse.data

  const maxAgeInSeconds = 30 * 60 * 60

  setCookie({ res }, 'access_token', accessToken, {
    maxAge: maxAgeInSeconds,
    path: '/',
  })

  const user = getGithubUser(accessToken)

  res.status(200).json(user)
}
