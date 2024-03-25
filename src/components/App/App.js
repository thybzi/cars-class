import {useEffect, useState} from 'react';
import {CatalogContent} from '../CatalogContent/CatalogContent';

export function App() {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(async () => {
        const res = await fetch('https://demo5394722.mockable.io/cars');
        const data = await res.json();
        setGalleryItems(data);
    });

    return (
        <CatalogContent
            galleryItems={galleryItems}
        />
    );
}
