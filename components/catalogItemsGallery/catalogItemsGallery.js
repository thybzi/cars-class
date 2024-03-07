import {catalogItem} from '../catalogItem/catalogItem.js';

export function catalogItemsGallery({
    items = [],
}) {
    return `
        <div class="catalogItemsGallery">
            ${items.map(catalogItem).join('\n')}
        </div>
    `;
}
