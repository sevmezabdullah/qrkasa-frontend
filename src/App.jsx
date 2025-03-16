import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { RestaurantProvider } from './context/RestaurantContext'

// Context
import { AuthProvider, ROLES } from './contexts/AuthContext'

// Bileşenler
import ProtectedRoute from './components/ProtectedRoute'

// Sayfalar
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Order from './pages/Order'
import KasaPanel from './pages/KasaPanel'
import GarsonPanel from './pages/GarsonPanel'
import MutfakPanel from './pages/MutfakPanel'
import PatronPanel from './pages/PatronPanel'
import Unauthorized from './pages/Unauthorized'
import NotFound from './pages/NotFound'

function App() {
  return (
    <RestaurantProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Herkesin erişebileceği sayfalar */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Kasa rolüne özel sayfalar */}
            <Route element={<ProtectedRoute allowedRoles={[ROLES.KASA, ROLES.PATRON]} />}>
              <Route path="/kasa" element={<KasaPanel />} />
            </Route>

            {/* Garson rolüne özel sayfalar */}
            <Route element={<ProtectedRoute allowedRoles={[ROLES.GARSON, ROLES.PATRON]} />}>
              <Route path="/garson" element={<GarsonPanel />} />
            </Route>

            {/* Mutfak rolüne özel sayfalar */}
            <Route element={<ProtectedRoute allowedRoles={[ROLES.MUTFAK, ROLES.PATRON]} />}>
              <Route path="/mutfak" element={<MutfakPanel />} />
            </Route>

            {/* Patron rolüne özel sayfalar */}
            <Route element={<ProtectedRoute allowedRoles={[ROLES.PATRON]} />}>
              <Route path="/patron" element={<PatronPanel />} />
            </Route>

            {/* Dashboard yönlendirmesi */}
            <Route path="/dashboard" element={<Navigate to="/login" replace />} />

            {/* 404 sayfası */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </RestaurantProvider>
  )
}

export default App
