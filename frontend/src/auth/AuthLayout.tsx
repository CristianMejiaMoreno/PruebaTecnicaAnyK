import type React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "./Login"
import { LogOutButton } from "./LogOut"
import { Profile } from "./Profile"
import { Shield, Sparkles } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600">Verificando autenticación...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Prueba Tecnica Any-k
            </h1>

            <div className="flex items-center justify-center space-x-1 mb-6">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <p className="text-gray-600">Con ganas de trabajar, HIRE ME PLS</p>
              <Sparkles className="h-4 w-4 text-pink-500" />
            </div>

            <div className="mb-5">
              <p className="text-gray-700">
                Cuenta de prueba
              </p>
              <div className="bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-700">
                  <br />
                    👤Usuario: test@test.com
                  <br />
                  🥷 Contraseña: Colombia2025*
                </p>
              </div>
            </div>

            <div className="justify-center  flex items-center">
                <LoginButton />
            </div>

            <p className="text-xs text-gray-500 mt-6">Inicia sesión de forma segura con Auth0</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Profile />
            <LogOutButton />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  )
}
