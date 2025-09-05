"use client"

import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "flowbite-react"
import { LogIn, Sparkles } from "lucide-react"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      onClick={() => {
        loginWithRedirect()
      }}
      style={{
        background: "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
        border: "none",
      }}
      className="!bg-gradient-to-r !from-white !to-purple-500 hover:!from-purple-700 hover:!to-white !text-white !border-none shadow-lg transform hover:scale-105 transition-all duration-200"
      size="lg"
    >
      <div className="flex items-center space-x-2">
        <LogIn className="h-5 w-5" />
        <span>Iniciar Sesión</span>
        <Sparkles className="h-4 w-4" />
      </div>
    </Button>
  )
}
