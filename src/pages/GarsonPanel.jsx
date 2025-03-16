import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const GarsonPanel = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Garson Paneli</h1>
                <div className="user-info">
                    <span>Hoş geldiniz, {currentUser.name}</span>
                    <button onClick={logout} className="logout-button">Çıkış Yap</button>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>Aktif Masalar</h2>
                    <div className="card-content">
                        <div className="table-grid">
                            <div className="table-item active">Masa 1</div>
                            <div className="table-item active">Masa 3</div>
                            <div className="table-item">Masa 4</div>
                            <div className="table-item active">Masa 7</div>
                            <div className="table-item">Masa 8</div>
                            <div className="table-item active">Masa 12</div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Bekleyen Siparişler</h2>
                    <div className="card-content">
                        <ul className="order-list">
                            <li>
                                <span className="table-name">Masa 3</span>
                                <span className="order-time">14:25</span>
                                <span className="order-status preparing">Hazırlanıyor</span>
                            </li>
                            <li>
                                <span className="table-name">Masa 7</span>
                                <span className="order-time">14:40</span>
                                <span className="order-status ready">Hazır</span>
                            </li>
                            <li>
                                <span className="table-name">Masa 12</span>
                                <span className="order-time">14:55</span>
                                <span className="order-status new">Yeni</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Hızlı İşlemler</h2>
                    <div className="card-content">
                        <button className="action-button">Yeni Sipariş</button>
                        <button className="action-button">Masa Birleştir</button>
                        <button className="action-button">Hesap İste</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GarsonPanel; 