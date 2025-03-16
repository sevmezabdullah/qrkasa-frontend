import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    const [tableNumber, setTableNumber] = useState('');
    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'starters', name: 'Başlangıçlar' },
        { id: 'main', name: 'Ana Yemekler' },
        { id: 'grill', name: 'Izgara' },
        { id: 'desserts', name: 'Tatlılar' },
        { id: 'drinks', name: 'İçecekler' }
    ];

    const menuItems = [
        { id: 1, name: 'Mercimek Çorbası', price: 35, category: 'starters', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Ezogelin Çorbası', price: 35, category: 'starters', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Karışık Salata', price: 45, category: 'starters', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Adana Kebap', price: 120, category: 'grill', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Urfa Kebap', price: 120, category: 'grill', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Tavuk Şiş', price: 100, category: 'grill', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'İskender', price: 130, category: 'main', image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Karışık Pizza', price: 110, category: 'main', image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Mantı', price: 90, category: 'main', image: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Künefe', price: 70, category: 'desserts', image: 'https://via.placeholder.com/150' },
        { id: 11, name: 'Baklava', price: 80, category: 'desserts', image: 'https://via.placeholder.com/150' },
        { id: 12, name: 'Sütlaç', price: 50, category: 'desserts', image: 'https://via.placeholder.com/150' },
        { id: 13, name: 'Ayran', price: 15, category: 'drinks', image: 'https://via.placeholder.com/150' },
        { id: 14, name: 'Kola', price: 20, category: 'drinks', image: 'https://via.placeholder.com/150' },
        { id: 15, name: 'Türk Kahvesi', price: 25, category: 'drinks', image: 'https://via.placeholder.com/150' }
    ];

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        const existingItem = cart.find(item => item.id === itemId);

        if (existingItem.quantity === 1) {
            setCart(cart.filter(item => item.id !== itemId));
        } else {
            setCart(cart.map(item =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handlePlaceOrder = () => {
        if (!tableNumber) {
            alert('Lütfen masa numaranızı girin!');
            return;
        }

        if (cart.length === 0) {
            alert('Lütfen en az bir ürün seçin!');
            return;
        }

        // Gerçek uygulamada burada API'ye sipariş gönderilir
        console.log('Sipariş verildi:', {
            tableNumber,
            items: cart,
            total: calculateTotal(),
            timestamp: new Date().toISOString()
        });

        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="order-success">
                <div className="success-content">
                    <h1>Siparişiniz Alındı!</h1>
                    <p>Masa {tableNumber} için siparişiniz başarıyla alındı.</p>
                    <p>Toplam Tutar: {calculateTotal()} ₺</p>
                    <p>Siparişiniz en kısa sürede hazırlanacaktır.</p>
                    <Link to="/menu" className="back-button">Menüye Dön</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="order-page">
            <div className="order-header">
                <h1>Sipariş Ver</h1>
                <div className="table-input">
                    <label htmlFor="tableNumber">Masa Numarası:</label>
                    <input
                        type="number"
                        id="tableNumber"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="Masa no girin"
                        min="1"
                    />
                </div>
            </div>

            <div className="order-content">
                <div className="menu-section">
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
                                    <p className="menu-item-price">{item.price} ₺</p>
                                    <button
                                        className="add-to-cart-button"
                                        onClick={() => addToCart(item)}
                                    >
                                        Ekle
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cart-section">
                    <h2>Sepetim</h2>
                    {cart.length === 0 ? (
                        <p className="empty-cart">Sepetiniz boş</p>
                    ) : (
                        <>
                            <ul className="cart-items">
                                {cart.map(item => (
                                    <li key={item.id} className="cart-item">
                                        <div className="cart-item-details">
                                            <span className="cart-item-name">{item.name}</span>
                                            <span className="cart-item-price">{item.price} ₺</span>
                                        </div>
                                        <div className="cart-item-quantity">
                                            <button
                                                className="quantity-button"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                className="quantity-button"
                                                onClick={() => addToCart(item)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="cart-item-total">
                                            {item.price * item.quantity} ₺
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="cart-total">
                                <span>Toplam:</span>
                                <span>{calculateTotal()} ₺</span>
                            </div>

                            <button
                                className="place-order-button"
                                onClick={handlePlaceOrder}
                            >
                                Siparişi Tamamla
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Order; 