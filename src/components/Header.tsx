import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import { useAuth } from "@/contexts/AuthContext";

import { Button } from "./Button";

export function Header() {
  const router = useRouter();
  const cookies = parseCookies();
  const { user, logout, loginWithGoogle } = useAuth()

  function handleLogout() {
    logout()
    router.replace("/login")
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <h1 className="text-xl font-semibold">Task Manager Dev</h1>
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex items-center space-x-4">
            <div className="relative rounded-full h-12 w-12 overflow-hidden">
              <Image
                className="cursor-pointer"
                src={user?.avatar}
                alt="User Avatar"
                objectFit="cover"
                width={50}
                height={50}
              />
            </div>
            <span className="hidden md:inline-block">
              {user.name}
            </span>
            <Button 
              text="Logout" 
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center justify-center text-white"
              onClick={handleLogout}
            />
          </div>
        )}
      </div>
    </header>
  )
}