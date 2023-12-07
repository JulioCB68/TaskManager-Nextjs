import { setCookie } from "nookies";

export function getAccessTokenFromHashFragmentURL(access_token: string) {
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const fragment = url.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const accessToken = params.get(access_token);

    setCookie(undefined, "access_token_google", accessToken as string, {
      maxAge: 10000 * 60 * 60,
    })
  }
}