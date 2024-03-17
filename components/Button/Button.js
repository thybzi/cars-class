export function button({
    text,
    auxClass = '',
}) {
    return `<div class="button ${auxClass}">${text}</div>`;
}
