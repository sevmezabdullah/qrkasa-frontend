import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Sayfa Bulunamadı</h2>
            <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
            <Link to="/" className="home-link">Ana Sayfaya Dön</Link>
        </div>
    )
}

export default NotFound 