import {catalogContent} from '../catalogContent/catalogContent.js';

export async function _page() {
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
