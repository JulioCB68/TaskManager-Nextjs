import { setCookie } from 'nookies'

export function getAccessTokenFromHashFragmentURL(accessToken: string) {
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.href
    const url = new URL(currentUrl)
    const fragment = url.hash.substring(1)
    const params = new URLSearchParams(fragment)
    const token = params.get(accessToken)

    const maxAgeInSeconds = 30 * 60 * 60

    setCookie(undefined, 'access_token', token as string, {
      maxAge: maxAgeInSeconds,
    })
  }
}
