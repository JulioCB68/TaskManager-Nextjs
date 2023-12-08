import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

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

  const userResponse = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const user = userResponse.data

  setCookie({ res }, 'access_token_github', accessToken, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })

  res.status(200).json(user)
}
