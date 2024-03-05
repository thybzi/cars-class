function catalogItem({
    title,
    category,
    isFavorite,
    image,
    volume,
    gear,
    capacity,
    price,
    oldPrice,
}) {
    const favoriteIconClass = isFavorite ? 'icon_heart' : 'icon_heartOutline';

    function details(iconName, data) {
        return `
            <div class="catalogItem__detailsItem">
                <div class="icon ${iconName} catalogItem__detailsItemIcon"></div>
                <div class="catalogItem__detailsItemCaption">${data}</div>
            </div>
        `;
    }

    return `
        <div class="catalogItem">
            <div class="catalogItem__titleBlock">
                <div class="catalogItem__title">${title}</div>
                <div class="catalogItem__category">${category}</div>
            </div>
            <div class="catalogItem__favorite">
                <div class="icon ${favoriteIconClass}"></div>
            </div>
            <div class="catalogItem__imageBlock">
                <img class="catalogItem__image" src="https://ik.imagekit.io/thybzi/${image}">
            </div>
            <div class="catalogItem__details">
                ${details(`icon_fuel`, `${volume}L`)}
                ${details(`icon_steer`, gear)}
                ${details(`icon_people`, `${capacity} People`)}
            </div>
            <div class="catalogItem__rentBlock">
                <div class="catalogItem__priceBlock">
                    <div class="catalogItem__priceRow">
                        <span class="catalogItem__price">$${price}.00/</span>
                        <span class="catalogItem__subject">day</span>
                    </div>
                    ${oldPrice ? `<div class="catalogItem__oldPrice">$${oldPrice}.00</div>` : ''}
                </div>
                ${button({
                    text: 'Rent Now',
                    auxClass: 'catalogItem__rentButton',
                })}
            </div>
        </div>
    `;
}
