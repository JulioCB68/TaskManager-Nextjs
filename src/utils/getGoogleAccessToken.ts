import { setCookie } from 'nookies'

export function getAccessTokenFromHashFragmentURL(accessToken: string) {
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.href
    const url = new URL(currentUrl)
    const fragment = url.hash.substring(1)
    const params = new URLSearchParams(fragment)
    const token = params.get(accessToken)

    setCookie(undefined, 'access_token_google', token as string, {
      maxAge: 10000 * 60 * 60,
    })
  }
}
