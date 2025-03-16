import React from 'react'

function Home() {
    return (
        <div className="container">
            <h1>QR Kasa</h1>
            <p>QR Kasa uygulamasına hoş geldiniz!</p>
            <div className="features">
                <div className="feature">
                    <h2>Kolay Ödeme</h2>
                    <p>QR kod ile hızlı ve güvenli ödeme yapın.</p>
                </div>
                <div className="feature">
                    <h2>Hızlı İşlem</h2>
                    <p>Saniyeler içinde işlemlerinizi tamamlayın.</p>
                </div>
                <div className="feature">
                    <h2>Güvenli Sistem</h2>
                    <p>En son güvenlik teknolojileri ile korunun.</p>
                </div>
            </div>
        </div>
    )
}

export default Home 