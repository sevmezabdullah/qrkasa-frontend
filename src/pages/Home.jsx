import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">QR Kasa</h1>
                    <p className="mb-5">QR Kasa uygulamasına hoş geldiniz! Modern ve kullanıcı dostu arayüzümüzle restoran yönetimini kolaylaştırıyoruz.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/menu" className="btn btn-primary">Menüyü Görüntüle</Link>
                        <Link to="/login" className="btn btn-secondary">Personel Girişi</Link>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="card bg-base-100 text-base-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Kolay Ödeme</h2>
                                <p>QR kod ile hızlı ve güvenli ödeme yapın.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 text-base-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Hızlı İşlem</h2>
                                <p>Saniyeler içinde işlemlerinizi tamamlayın.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 text-base-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Güvenli Sistem</h2>
                                <p>En son güvenlik teknolojileri ile korunun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 