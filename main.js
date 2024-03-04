'use strict';

const components = [
    '_page',
    'button',
    'catalogContent',
    'catalogItem',
    'catalogItemsGallery',
    'catalogMore',
    'icon',
];

Promise.all(components.map(loadComponent)).then(() => {
    document.body.insertAdjacentHTML('afterbegin', catalogMore());
    document.body.insertAdjacentHTML('afterbegin', _page());
});


function loadComponent(name) {
    const styleElem = document.createElement('link');
    styleElem.rel = 'stylesheet';
    styleElem.href = `components/${name}/${name}.css`;
    document.head.append(styleElem);

    const scriptElem = document.createElement('script');
    scriptElem.src = `components/${name}/${name}.js`;
    document.head.append(scriptElem);

    return Promise.all([
        promiseElemLoad(styleElem),
        promiseElemLoad(scriptElem),
    ]);
}

function promiseElemLoad(elem) {
    return new Promise((resolve, reject) => {
        elem.onload = resolve;
        elem.onerror = reject;
    });
}
