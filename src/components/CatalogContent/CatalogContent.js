import {
    CatalogItemsGallery,
} from '../CatalogItemsGallery/CatalogItemsGallery';
import {CatalogMore} from '../CatalogMore/CatalogMore';

export function CatalogContent({
    galleryItems = [],
}) {
    const galleryItemsLimit = 3;
    /*
    addHandler('.catalogMore__button', showMoreItems);
    */

    return (
        <div className="catalogContent">
            <CatalogItemsGallery
                items={galleryItems.slice(0, galleryItemsLimit)}
            />
            <CatalogMore/>
        </div>
    );


    /*
    function showMoreItems() {
        const galleryElem = document.querySelector('.catalogItemsGallery');
        const lastChildIndex = galleryElem.children.length - 1;
        const newItems = galleryItems.slice(lastChildIndex, lastChildIndex + galleryItemsLimit);

        if (newItems.length) {
            galleryElem.insertAdjacentHTML('beforeend', formatGalleryItems(newItems));
        }
    }
    */
}
