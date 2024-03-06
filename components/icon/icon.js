/*
<div class="icon icon_heartOutline"></div>
<div class="icon icon_heart"></div>
<div class="icon icon_people catalogItem__detailsItemIcon"></div>
*/

export function icon({
    name,
    auxClass = '',
}) {
    return `<div class="icon icon_${name} ${auxClass}"></div>`;
}
