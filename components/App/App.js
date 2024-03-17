import {catalogContent} from '../CatalogContent/catalogContent.js';

export async function App() {
    try {
        const res = await fetch('https://demo5394722.mockable.io/cars');
        const data = await res.json();

        return catalogContent({
            galleryItems: data,
        });
    } catch (ex) {
        return `Не удалось отобразить страницу: ${ex.message}`;
    }
}
