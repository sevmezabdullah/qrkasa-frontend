import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#2e4057]/95 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                        <span className="text-2xl font-bold text-white">Restoran Adı</span>
                    </Link>

                    {/* Mobil Menü Butonu */}
                    <div className="md:hidden">
                        <button className="p-2 text-white hover:text-[#ff6b35] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Masaüstü Menü */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/menu"
                            className="px-4 py-2 text-white hover:text-[#ff6b35] transition-colors"
                        >
                            Menü
                        </Link>
                        <Link
                            to="/login"
                            className="px-6 py-2 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-lg transition-all duration-300"
                        >
                            Personel Girişi
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 