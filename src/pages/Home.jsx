import React from 'react';
import Navbar from '../components/Navbar';
import { useRestaurant } from '../context/RestaurantContext';

function Home() {
    const restaurantData = useRestaurant();

    if (restaurantData.loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ff6b35]"></div>
            </div>
        );
    }

    if (restaurantData.error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-[#2e4057] text-xl">{restaurantData.error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white">
            <Navbar />

            {/* Hero Bölümü */}
            <div className="bg-gradient-to-b from-gray-50 to-white pt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between py-12">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-6xl font-bold text-[#2e4057] mb-4">
                                {restaurantData.name}
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {restaurantData.description}
                            </p>
                            <button className="bg-[#ff6b35] text-white px-8 py-3 rounded-lg hover:bg-[#e55a2b] transition-all duration-300">
                                Menüyü Görüntüle
                            </button>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={restaurantData.heroImage}
                                    alt={restaurantData.name}
                                    className="w-full h-[300px] md:h-[400px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Özellikler Bölümü */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {restaurantData.features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-[#ff6b35] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2e4057] mb-2">{feature}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hakkımızda Bölümü */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#2e4057] mb-4">Hakkımızda</h2>
                        <div className="w-20 h-1 bg-[#ff6b35] mx-auto"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src={restaurantData.aboutImage}
                                alt="Restoran İç Mekan"
                                className="w-full h-[300px] object-cover rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <div className="text-gray-600 mb-6 leading-relaxed space-y-4">
                                {restaurantData.story.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* İletişim Bölümü */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#2e4057] mb-4">İletişim</h2>
                        <div className="w-20 h-1 bg-[#ff6b35] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-[#ff6b35] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2e4057] mb-2">Adres</h3>
                            <p className="text-gray-600">{restaurantData.contact.address}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-[#ff6b35] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2e4057] mb-2">Telefon</h3>
                            <p className="text-gray-600">{restaurantData.contact.phone}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-[#ff6b35] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2e4057] mb-2">E-posta</h3>
                            <p className="text-gray-600">{restaurantData.contact.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Çalışma Saatleri ve Sosyal Medya */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-[#2e4057] mb-6">Çalışma Saatleri</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                    <span className="text-gray-600">Pazartesi - Cuma</span>
                                    <span className="font-medium text-[#2e4057]">{restaurantData.workingHours.weekdays}</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                    <span className="text-gray-600">Cumartesi</span>
                                    <span className="font-medium text-[#2e4057]">{restaurantData.workingHours.saturday}</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                    <span className="text-gray-600">Pazar</span>
                                    <span className="font-medium text-[#2e4057]">{restaurantData.workingHours.sunday}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-[#2e4057] mb-6">Sosyal Medya</h3>
                            <div className="flex gap-4">
                                {restaurantData.social.facebook && (
                                    <a href={restaurantData.social.facebook} target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-100">
                                        <svg className="w-6 h-6 text-[#ff6b35]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                                        </svg>
                                    </a>
                                )}
                                {restaurantData.social.instagram && (
                                    <a href={restaurantData.social.instagram} target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-100">
                                        <svg className="w-6 h-6 text-[#ff6b35]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02c0-1.5-.47-2.7-1.3-3.54a4.82 4.82 0 0 0-3.54-1.25zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                                        </svg>
                                    </a>
                                )}
                                {restaurantData.social.twitter && (
                                    <a href={restaurantData.social.twitter} target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-100">
                                        <svg className="w-6 h-6 text-[#ff6b35]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Telif Hakkı */}
            <div className="py-6 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()} {restaurantData.name} - Tüm hakları saklıdır
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;