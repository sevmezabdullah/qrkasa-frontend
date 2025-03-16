import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'starters', name: 'Başlangıçlar' },
        { id: 'main', name: 'Ana Yemekler' },
        { id: 'grill', name: 'Izgara' },
        { id: 'desserts', name: 'Tatlılar' },
        { id: 'drinks', name: 'İçecekler' }
    ];

    const menuItems = [
        { id: 1, name: 'Mercimek Çorbası', price: 35, category: 'starters', image: 'https://via.placeholder.com/150', description: 'Geleneksel Türk mercimek çorbası' },
        { id: 2, name: 'Ezogelin Çorbası', price: 35, category: 'starters', image: 'https://via.placeholder.com/150', description: 'Mercimek, bulgur ve baharatlarla' },
        { id: 3, name: 'Karışık Salata', price: 45, category: 'starters', image: 'https://via.placeholder.com/150', description: 'Mevsim yeşillikleri ile' },
        { id: 4, name: 'Adana Kebap', price: 120, category: 'grill', image: 'https://via.placeholder.com/150', description: 'Acılı kıyma kebabı' },
        { id: 5, name: 'Urfa Kebap', price: 120, category: 'grill', image: 'https://via.placeholder.com/150', description: 'Acısız kıyma kebabı' },
        { id: 6, name: 'Tavuk Şiş', price: 100, category: 'grill', image: 'https://via.placeholder.com/150', description: 'Marine edilmiş tavuk parçaları' },
        { id: 7, name: 'İskender', price: 130, category: 'main', image: 'https://via.placeholder.com/150', description: 'Döner, yoğurt ve tereyağı sosu ile' },
        { id: 8, name: 'Karışık Pizza', price: 110, category: 'main', image: 'https://via.placeholder.com/150', description: 'Sucuk, sosis, mantar ve peynir ile' },
        { id: 9, name: 'Mantı', price: 90, category: 'main', image: 'https://via.placeholder.com/150', description: 'El yapımı mantı, yoğurt ve sos ile' },
        { id: 10, name: 'Künefe', price: 70, category: 'desserts', image: 'https://via.placeholder.com/150', description: 'Kadayıf, peynir ve şerbet ile' },
        { id: 11, name: 'Baklava', price: 80, category: 'desserts', image: 'https://via.placeholder.com/150', description: 'Fıstıklı baklava' },
        { id: 12, name: 'Sütlaç', price: 50, category: 'desserts', image: 'https://via.placeholder.com/150', description: 'Fırında pişirilmiş sütlaç' },
        { id: 13, name: 'Ayran', price: 15, category: 'drinks', image: 'https://via.placeholder.com/150', description: 'Geleneksel Türk içeceği' },
        { id: 14, name: 'Kola', price: 20, category: 'drinks', image: 'https://via.placeholder.com/150', description: 'Soğuk servis edilir' },
        { id: 15, name: 'Türk Kahvesi', price: 25, category: 'drinks', image: 'https://via.placeholder.com/150', description: 'Geleneksel Türk kahvesi' }
    ];

    // Filtreleme: Önce kategoriye göre, sonra arama terimine göre
    const filteredItems = menuItems
        .filter(item => activeCategory === 'all' || item.category === activeCategory)
        .filter(item =>
            searchTerm === '' ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-6">
                {/* Başlık */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-neutral-800 mb-2">QR Kasa Menü</h1>
                    <p className="text-neutral-600 mb-4">Lezzetli yemeklerimizi keşfedin</p>
                    <Link to="/login" className="btn btn-sm btn-outline normal-case">Personel Girişi</Link>
                </div>

                {/* Arama Kutusu */}
                <div className="mb-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Yemek ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Kategori Butonları */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`btn btn-sm ${activeCategory === category.id ? 'bg-blue-500 text-white' : 'bg-white text-neutral-800 border border-gray-300'} normal-case min-w-[100px]`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Menü Öğeleri - Grid Yapısı */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {filteredItems.map(item => (
                            <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col">
                                <div className="h-36 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-3 flex flex-col flex-grow">
                                    <h2 className="text-base font-bold text-neutral-800 mb-1">{item.name}</h2>
                                    <p className="text-neutral-600 text-xs mb-2 line-clamp-2">{item.description}</p>
                                    <div className="mt-auto">
                                        <span className="text-blue-500 font-bold">{item.price} ₺</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-neutral-600">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                        <button
                            className="btn btn-sm btn-outline mt-4"
                            onClick={() => {
                                setSearchTerm('');
                                setActiveCategory('all');
                            }}
                        >
                            Tüm Menüyü Göster
                        </button>
                    </div>
                )}

                {/* Alt Bilgi */}
                <div className="text-center text-xs text-neutral-500 mt-12">
                    © 2023 QR Kasa - Tüm hakları saklıdır
                </div>
            </div>
        </div>
    );
};

export default Menu; 