import {addHandler} from '../../handlers.js';
import {
    catalogItemsGallery,
    formatItems as formatGalleryItems,
} from '../catalogItemsGallery/catalogItemsGallery.js';
import {catalogMore} from '../catalogMore/catalogMore.js';

export function catalogContent({
    galleryItems = [],
}) {
    const galleryItemsLimit = 3;
    addHandler('.catalogMore__button', showMoreItems);

    return `
        <div class="catalogContent">
            ${catalogItemsGallery({
                items: galleryItems.slice(0, galleryItemsLimit),
            })}
            ${catalogMore()}
        </div>
    `;


    function showMoreItems() {
        const galleryElem = document.querySelector('.catalogItemsGallery');
        const lastChildIndex = galleryElem.children.length - 1;
        const newItems = galleryItems.slice(lastChildIndex, lastChildIndex + galleryItemsLimit);

        if (newItems.length) {
            galleryElem.insertAdjacentHTML('beforeend', formatGalleryItems(newItems));
        }
    }
}
