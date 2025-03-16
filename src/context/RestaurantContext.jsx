import React, { createContext, useContext, useState, useEffect } from 'react';

const RestaurantContext = createContext();

export function useRestaurant() {
    return useContext(RestaurantContext);
}

// Mock data
const mockRestaurantData = {
    name: 'Lezzet Durağı',
    description: 'Eşsiz lezzetler ve unutulmaz deneyimler için sizi restoranımıza bekliyoruz. Modern atmosferimiz ve özenle hazırlanan menümüzle damak tadınıza hitap ediyoruz.',
    story: 'Lezzet Durağı, 2010 yılında aileden gelen yemek tutkusuyla kuruldu. Geleneksel tarifleri modern sunumlarla birleştirerek, misafirlerimize benzersiz bir deneyim sunmayı hedefliyoruz.\n\nYılların verdiği tecrübe ve kaliteden ödün vermeyen hizmet anlayışımızla, her gün yüzlerce misafirimizi ağırlıyoruz. Taze malzemeler, uzman şefler ve özel tariflerimizle fark yaratıyoruz.',
    features: [
        'Taze ve kaliteli malzemeler',
        'Uzman şefler tarafından hazırlanan özel menü',
        'Modern ve ferah ortam',
        'Profesyonel servis anlayışı'
    ],
    contact: {
        address: 'Örnek Mahallesi, Lezzet Caddesi No:123, Merkez/İstanbul',
        phone: '+90 (212) 555 44 33',
        email: 'info@lezzetduragi.com',
    },
    workingHours: {
        weekdays: '09:00 - 22:00',
        saturday: '10:00 - 23:00',
        sunday: '10:00 - 21:00',
    },
    social: {
        facebook: 'https://facebook.com/lezzetduragi',
        instagram: 'https://instagram.com/lezzetduragi',
        twitter: 'https://twitter.com/lezzetduragi',
    },
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    aboutImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    loading: false,
    error: null
};

export function RestaurantProvider({ children }) {
    const [restaurantData, setRestaurantData] = useState(mockRestaurantData);

    useEffect(() => {
        // Mock API çağrısı simülasyonu
        const fetchMockData = async () => {
            try {
                // API çağrısını simüle etmek için 1 saniyelik gecikme
                await new Promise(resolve => setTimeout(resolve, 1000));
                setRestaurantData(mockRestaurantData);
            } catch (error) {
                setRestaurantData(prev => ({
                    ...prev,
                    loading: false,
                    error: 'Restoran bilgileri yüklenirken bir hata oluştu.'
                }));
            }
        };

        fetchMockData();
    }, []);

    return (
        <RestaurantContext.Provider value={restaurantData}>
            {children}
        </RestaurantContext.Provider>
    );
} 