function catalogContent({
    content = '',
    button = '',
}) {
    return `
        <div class="catalogContent">
            ${content},
            ${button}
        </div>
    `;
}
