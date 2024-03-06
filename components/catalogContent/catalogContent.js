import {catalogItemsGallery} from '../catalogItemsGallery/catalogItemsGallery.js';
import {catalogMore} from '../catalogMore/catalogMore.js';

export function catalogContent({
    galleryItems = [],
}) {
    return `
        <div class="catalogContent">
            ${catalogItemsGallery({
                items: galleryItems,
            })}
            ${catalogMore()}
        </div>
    `;
}
