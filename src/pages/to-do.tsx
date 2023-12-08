import { Header } from '@/components/Header'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'

export default function Auth() {
  const { isAuthenticated } = useAuth()

  return (
    <ProtectedRoute>
      <Header />
      <div className="items-center justify-center">
        <div className="bg-gray dark:bg-primary">
          <div className="my-04 mx-auto max-w-4xl px-12 py-[7.40rem]">
            <div className="text-textBlack dark:text-textPrimary flex flex-col items-center justify-center py-20">
              <div className="flex">
                {isAuthenticated && <p>Autenticado</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
