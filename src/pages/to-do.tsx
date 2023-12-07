import React from "react";
import { useRouter } from "next/router";
import { parseCookies } from 'nookies'

import { useAuth } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import { ProtectedRoute } from "@/components/ProtectedRoute";


export default function Auth() {
  const router = useRouter();
  const { code } = router.query;
  const cookies = parseCookies();
  const {  isAuthenticated, user, loginWithGoogle, loginWithGithub, logout } = useAuth()

  return (
    <ProtectedRoute>
      <Header />
      <div className="items-center justify-center">
        <div className="bg-gray dark:bg-primary">
          <div className="my-04 mx-auto max-w-4xl px-12 py-[7.40rem]">
            <div className="flex items-center flex-col justify-center py-20 text-textBlack dark:text-textPrimary">
              <div className="flex">
                {isAuthenticated && <p>Autenticado</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}