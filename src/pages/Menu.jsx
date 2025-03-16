import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');

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

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="menu-page">
            <div className="menu-header">
                <h1>QR Kasa Menü</h1>
                <p>Lezzetli yemeklerimizi keşfedin</p>
                <Link to="/login" className="login-link">Personel Girişi</Link>
            </div>

            <div className="category-tabs">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="menu-items">
                {filteredItems.map(item => (
                    <div key={item.id} className="menu-item">
                        <div className="menu-item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="menu-item-details">
                            <h3>{item.name}</h3>
                            <p className="menu-item-description">{item.description}</p>
                            <p className="menu-item-price">{item.price} ₺</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="qr-section">
                <h2>Masanızdaki QR Kodu Tarayın</h2>
                <p>Siparişinizi vermek için masanızdaki QR kodu tarayabilirsiniz.</p>
                <Link to="/order" className="order-button">Sipariş Ver</Link>
            </div>
        </div>
    );
};

export default Menu; 