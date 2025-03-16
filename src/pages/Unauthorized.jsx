import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Unauthorized = () => {
    const { logout } = useAuth();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="text-error mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold">Yetkisiz Erişim</h1>
                    <p className="py-6">Bu sayfaya erişim yetkiniz bulunmamaktadır.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/" className="btn btn-primary">Ana Sayfaya Dön</Link>
                        <button onClick={logout} className="btn btn-error">Çıkış Yap</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized; 