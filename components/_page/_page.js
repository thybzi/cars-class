async function _page() {
    const res = await fetch('https://demo5394722.mockable.io/cars');
    const data = await res.json();

    return catalogContent({
        content: catalogItemsGallery({
            items: data,
        }),
        button: catalogMore()
    });
}

