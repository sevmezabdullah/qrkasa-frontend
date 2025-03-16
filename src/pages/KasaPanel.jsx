import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const KasaPanel = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Kasa Paneli</h1>
                <div className="user-info">
                    <span>Hoş geldiniz, {currentUser.name}</span>
                    <button onClick={logout} className="logout-button">Çıkış Yap</button>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>Günlük Satışlar</h2>
                    <div className="card-content">
                        <p>Bugün: 1,250 ₺</p>
                        <p>Dün: 980 ₺</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Bekleyen Ödemeler</h2>
                    <div className="card-content">
                        <ul>
                            <li>Masa 3 - 145 ₺</li>
                            <li>Masa 7 - 210 ₺</li>
                            <li>Masa 12 - 320 ₺</li>
                        </ul>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Hızlı İşlemler</h2>
                    <div className="card-content">
                        <button className="action-button">Yeni Ödeme Al</button>
                        <button className="action-button">Günlük Rapor</button>
                        <button className="action-button">Z Raporu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KasaPanel; 