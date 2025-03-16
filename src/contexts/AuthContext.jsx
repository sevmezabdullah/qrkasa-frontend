import React, { createContext, useState, useContext, useEffect } from 'react';

// Roller
export const ROLES = {
    KASA: 'kasa',
    MUSTERI: 'musteri',
    GARSON: 'garson',
    MUTFAK: 'mutfak',
    PATRON: 'patron'
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // LocalStorage'dan kullanıcı bilgilerini al
        const storedUser = localStorage.getItem('qrkasa_user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Giriş fonksiyonu
    const login = (username, password) => {
        // Gerçek uygulamada API'ye istek atılacak
        // Şimdilik basit bir demo için:
        const demoUsers = [
            { id: 1, username: 'kasa', password: '123456', role: ROLES.KASA, name: 'Kasa Kullanıcısı' },
            { id: 2, username: 'garson', password: '123456', role: ROLES.GARSON, name: 'Garson Kullanıcısı' },
            { id: 3, username: 'mutfak', password: '123456', role: ROLES.MUTFAK, name: 'Mutfak Kullanıcısı' },
            { id: 4, username: 'patron', password: '123456', role: ROLES.PATRON, name: 'Patron Kullanıcısı' }
        ];

        const user = demoUsers.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            // Şifreyi saklamayalım
            const { password, ...userWithoutPassword } = user;
            setCurrentUser(userWithoutPassword);
            localStorage.setItem('qrkasa_user', JSON.stringify(userWithoutPassword));
            return userWithoutPassword;
        }
        return null;
    };

    // Çıkış fonksiyonu
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('qrkasa_user');
    };

    // Kullanıcının belirli bir role sahip olup olmadığını kontrol et
    const hasRole = (role) => {
        return currentUser?.role === role;
    };

    const value = {
        currentUser,
        login,
        logout,
        hasRole,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext; 