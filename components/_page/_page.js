import {catalogContent} from '../catalogContent/catalogContent.js';
import {catalogItemsGallery} from '../catalogItemsGallery/catalogItemsGallery.js';
import {catalogMore} from '../catalogMore/catalogMore.js';

export async function _page() {
    try {
        const res = await fetch('https://demo5394722.mockable.io/cars');
        const data = await res.json();

        return catalogContent({
            content: catalogItemsGallery({
                items: data,
            }),
            button: catalogMore(),
        });
    } catch (ex) {
        return 'Не удалось загрузить данные';
    }
}
