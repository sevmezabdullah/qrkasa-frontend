import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const PatronPanel = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Patron Paneli</h1>
                <div className="user-info">
                    <span>Hoş geldiniz, {currentUser.name}</span>
                    <button onClick={logout} className="logout-button">Çıkış Yap</button>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>Finansal Özet</h2>
                    <div className="card-content">
                        <div className="financial-summary">
                            <div className="summary-item">
                                <h3>Günlük Ciro</h3>
                                <p className="amount">4,250 ₺</p>
                            </div>
                            <div className="summary-item">
                                <h3>Haftalık Ciro</h3>
                                <p className="amount">28,750 ₺</p>
                            </div>
                            <div className="summary-item">
                                <h3>Aylık Ciro</h3>
                                <p className="amount">112,500 ₺</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Personel Durumu</h2>
                    <div className="card-content">
                        <ul className="staff-list">
                            <li>
                                <span className="staff-name">Ahmet Yılmaz</span>
                                <span className="staff-role">Kasa</span>
                                <span className="staff-status active">Aktif</span>
                            </li>
                            <li>
                                <span className="staff-name">Mehmet Demir</span>
                                <span className="staff-role">Garson</span>
                                <span className="staff-status active">Aktif</span>
                            </li>
                            <li>
                                <span className="staff-name">Ayşe Kaya</span>
                                <span className="staff-role">Garson</span>
                                <span className="staff-status inactive">İzinli</span>
                            </li>
                            <li>
                                <span className="staff-name">Ali Öztürk</span>
                                <span className="staff-role">Mutfak</span>
                                <span className="staff-status active">Aktif</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Popüler Ürünler</h2>
                    <div className="card-content">
                        <ul className="product-list">
                            <li>
                                <span className="product-name">Adana Kebap</span>
                                <span className="product-sales">125 adet</span>
                                <span className="product-revenue">12,500 ₺</span>
                            </li>
                            <li>
                                <span className="product-name">Karışık Pizza</span>
                                <span className="product-sales">98 adet</span>
                                <span className="product-revenue">8,820 ₺</span>
                            </li>
                            <li>
                                <span className="product-name">İskender</span>
                                <span className="product-sales">87 adet</span>
                                <span className="product-revenue">7,830 ₺</span>
                            </li>
                            <li>
                                <span className="product-name">Künefe</span>
                                <span className="product-sales">76 adet</span>
                                <span className="product-revenue">4,560 ₺</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h2>Yönetim İşlemleri</h2>
                    <div className="card-content">
                        <div className="admin-actions">
                            <button className="admin-button">Personel Yönetimi</button>
                            <button className="admin-button">Menü Düzenle</button>
                            <button className="admin-button">Finansal Raporlar</button>
                            <button className="admin-button">Stok Yönetimi</button>
                            <button className="admin-button">Sistem Ayarları</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatronPanel; 