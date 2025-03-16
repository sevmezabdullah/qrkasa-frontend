import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-9xl font-bold text-error">404</h1>
                    <h2 className="text-3xl font-bold mt-4">Sayfa Bulunamadı</h2>
                    <p className="py-6">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
                    <Link to="/" className="btn btn-primary">Ana Sayfaya Dön</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound 