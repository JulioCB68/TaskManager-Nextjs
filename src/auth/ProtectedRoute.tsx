import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export async function ProtectedRoute(context: GetServerSidePropsContext) {
  const cookies = nookies.get(context)

  const hasToken = cookies.access_token

  if (!hasToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return { props: {} }
}
