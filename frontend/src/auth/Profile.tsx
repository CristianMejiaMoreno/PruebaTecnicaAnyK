import { useAuth0 } from "@auth0/auth0-react"
import { User } from "lucide-react"

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-gray-600">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
        <span className="text-sm">Cargando...</span>
      </div>
    )
  }

  return (
    isAuthenticated && (
      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
        <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
          {user?.picture ? (
            <img
              src={user.picture || "/placeholder.svg"}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <User className="h-4 w-4 text-purple-600" />
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">Bienvenido, {user?.name || user?.email}</span>
        </div>
      </div>
    )
  )
}
