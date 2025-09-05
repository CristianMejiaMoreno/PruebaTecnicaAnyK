import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AnikProducts from "./components/AnikProducts"
import { AuthLayout } from "./auth/AuthLayout"
import { LoginPage } from "./pages/LoginPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <AuthLayout>
              <AnikProducts />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  )
}
