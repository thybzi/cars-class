function _page() {
    return catalogContent({
        content: catalogItemsGallery({
            items: [
                {
                    title: 'Keonigsegg',
                    category: 'Sport',
                    isFavorite: true,
                    image: 'car01.jpg',
                    volume: 80,
                    gear: 'Manual',
                    capacity: 2,
                    price: 99,
                },
                {
                    title: 'Rolls-Royce',
                    category: 'Sport',
                    isFavorite: false,
                    image: 'car03.jpg',
                    volume: 70,
                    gear: 'Manual',
                    capacity: 4,
                    price: 96,
                },
                {
                    title: 'All New Rush',
                    category: 'SUV',
                    isFavorite: false,
                    image: 'car04.jpg',
                    volume: 70,
                    gear: 'Manual',
                    capacity: 6,
                    price: 72,
                    oldPrice: 80,
                },
                {
                    title: 'MG ZX Exclusive',
                    category: 'Hatchback',
                    isFavorite: false,
                    image: 'car07.jpg',
                    volume: 70,
                    gear: 'Electric',
                    capacity: 4,
                    price: 76,
                    oldPrice: 80,
                },
            ],
        }),
    });
}
