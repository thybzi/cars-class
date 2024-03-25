import {CatalogItem} from '../CatalogItem/CatalogItem';

export function CatalogItemsGallery({
    items = [],
}) {
    return (
        <div className="catalogItemsGallery">
            {items.map((itemProps, i) => (
                <CatalogItem
                    key={i}
                    {...itemProps}
                />
            ))}
        </div>
    );
}
