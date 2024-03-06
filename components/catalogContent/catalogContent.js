import {catalogItemsGallery} from '../catalogItemsGallery/catalogItemsGallery.js';
import {catalogMore} from '../catalogMore/catalogMore.js';

export function catalogContent({
    galleryItems = [],
}) {
    const galleryItemsLimit = 3;

    return `
        <div class="catalogContent">
            ${catalogItemsGallery({
                items: galleryItems.slice(0, galleryItemsLimit),
            })}
            ${catalogMore()}
        </div>
    `;
}
