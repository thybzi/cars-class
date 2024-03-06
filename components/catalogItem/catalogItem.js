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
    const favoriteIconName = isFavorite ? 'heart' : 'heartOutline';

    return `
        <div class="catalogItem">
            <div class="catalogItem__titleBlock">
                <div class="catalogItem__title">${title}</div>
                <div class="catalogItem__category">${category}</div>
            </div>
            <div class="catalogItem__favorite">
                ${icon({
                    name: favoriteIconName,
                })}
            </div>
            <div class="catalogItem__imageBlock">
                <img class="catalogItem__image" src="files/${image}">
            </div>
            <div class="catalogItem__details">
                <div class="catalogItem__detailsItem">
                    <div class="icon icon_fuel catalogItem__detailsItemIcon"></div>
                    <div class="catalogItem__detailsItemCaption">${volume}L</div>
                </div>
                <div class="catalogItem__detailsItem">
                    <div class="icon icon_steer catalogItem__detailsItemIcon"></div>
                    <div class="catalogItem__detailsItemCaption">${gear}</div>
                </div>
                <div class="catalogItem__detailsItem">
                    <div class="icon icon_people catalogItem__detailsItemIcon"></div>
                    <div class="catalogItem__detailsItemCaption">${capacity} People</div>
                </div>
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
