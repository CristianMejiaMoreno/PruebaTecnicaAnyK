import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "../auth/Login"
import { LogOutButton } from "../auth/LogOut"
import { Profile } from "../auth/Profile"
import { Sparkles, Heart } from "lucide-react"

export const LoginPage = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 mr-2" />
            <Heart className="h-8 w-8 text-pink-500" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Gestión de Productos
          </h1>
          <p className="text-gray-600">Sistema de administración de cosméticos</p>
        </div>

        {/* Auth Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
          {!isAuthenticated ? (
            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Iniciar Sesión</h2>
                <p className="text-gray-600 text-sm">Accede a tu cuenta para gestionar productos</p>
              </div>
              <LoginButton />
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <Profile />
              </div>
              <div className="space-y-4">
                <a
                  href="/"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  Ir al Dashboard
                </a>
                <LogOutButton />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">© 2024 Sistema de Gestión de Productos</p>
        </div>
      </div>
    </div>
  )
}
