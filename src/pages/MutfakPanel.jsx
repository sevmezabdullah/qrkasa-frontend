import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const MutfakPanel = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Mutfak Paneli</h1>
                <div className="user-info">
                    <span>Hoş geldiniz, {currentUser.name}</span>
                    <button onClick={logout} className="logout-button">Çıkış Yap</button>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>Bekleyen Siparişler</h2>
                    <div className="card-content">
                        <div className="order-item new">
                            <div className="order-header">
                                <span className="table-name">Masa 12</span>
                                <span className="order-time">14:55</span>
                            </div>
                            <ul className="order-details">
                                <li>2x Karışık Pizza (Acısız)</li>
                                <li>1x Tavuk Şiş</li>
                                <li>3x Ayran</li>
                            </ul>
                            <div className="order-actions">
                                <button className="start-button">Hazırlamaya Başla</button>
                            </div>
                        </div>

                        <div className="order-item preparing">
                            <div className="order-header">
                                <span className="table-name">Masa 3</span>
                                <span className="order-time">14:25</span>
                            </div>
                            <ul className="order-details">
                                <li>1x Adana Kebap</li>
                                <li>1x Lahmacun</li>
                                <li>2x Kola</li>
                            </ul>
                            <div className="order-actions">
                                <button className="complete-button">Hazır</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Hazır Siparişler</h2>
                    <div className="card-content">
                        <div className="order-item ready">
                            <div className="order-header">
                                <span className="table-name">Masa 7</span>
                                <span className="order-time">14:40</span>
                            </div>
                            <ul className="order-details">
                                <li>2x İskender</li>
                                <li>1x Salata</li>
                                <li>2x Su</li>
                            </ul>
                            <div className="order-actions">
                                <button className="deliver-button">Teslim Edildi</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Stok Durumu</h2>
                    <div className="card-content">
                        <ul className="stock-list">
                            <li className="stock-warning">
                                <span className="stock-name">Dana Eti</span>
                                <span className="stock-amount">2.5 kg</span>
                            </li>
                            <li>
                                <span className="stock-name">Tavuk</span>
                                <span className="stock-amount">8 kg</span>
                            </li>
                            <li>
                                <span className="stock-name">Domates</span>
                                <span className="stock-amount">12 kg</span>
                            </li>
                            <li className="stock-warning">
                                <span className="stock-name">Peynir</span>
                                <span className="stock-amount">1.5 kg</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MutfakPanel; 