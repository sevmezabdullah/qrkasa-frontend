import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Rol bazlı erişim kontrolü için bileşen
const ProtectedRoute = ({ allowedRoles }) => {
    const { currentUser, loading } = useAuth();

    // Yükleme durumunda bekle
    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    // Kullanıcının rolü izin verilen roller arasında mı kontrol et
    if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
        // Yetkisiz erişim durumunda ana sayfaya yönlendir
        return <Navigate to="/unauthorized" replace />;
    }

    // Tüm kontroller geçildi, alt rotaları göster
    return <Outlet />;
};

export default ProtectedRoute; 