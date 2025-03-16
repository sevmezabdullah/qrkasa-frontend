import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Unauthorized = () => {
    const { logout } = useAuth();

    return (
        <div className="unauthorized-page">
            <div className="unauthorized-content">
                <h1>Yetkisiz Erişim</h1>
                <p>Bu sayfaya erişim yetkiniz bulunmamaktadır.</p>
                <div className="unauthorized-actions">
                    <Link to="/" className="home-link">Ana Sayfaya Dön</Link>
                    <button onClick={logout} className="logout-button">Çıkış Yap</button>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized; 