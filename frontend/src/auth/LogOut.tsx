"use client"

import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "flowbite-react"
import { LogOut } from "lucide-react"

export const LogOutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: `${window.location.origin}`,
          },
        })
      }
      style={{
        background: "linear-gradient(to right, rgb(239, 68, 68), rgb(219, 39, 119))",
        border: "none",
      }}
      className="!bg-gradient-to-r !from-white !to-purple-500 hover:!from-purple-600 hover:!to-white !text-white !border-none shadow-lg transform hover:scale-105 transition-all duration-200"
      size="sm"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Cerrar Sesión
    </Button>
  )
}
