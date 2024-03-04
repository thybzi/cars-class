function catalogItemsGallery({
    items = [],
}) {
    return `
        <div class="catalogItemsGallery">
            ${items.map(catalogItem).join('\n')}
        </div>
    `;
}
