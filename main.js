import {applyHandlers} from './handlers.js';
import {_page} from './components/_page/_page.js';

const components = [
    '_page',
    'button',
    'catalogContent',
    'catalogItem',
    'catalogItemsGallery',
    'catalogMore',
    'icon',
];

Promise.all(components.map(loadComponent)).then(async () => {
    document.body.insertAdjacentHTML('afterbegin', await _page());
    applyHandlers();
});


function loadComponent(name) {
    const styleElem = document.createElement('link');
    styleElem.rel = 'stylesheet';
    styleElem.href = `components/${name}/${name}.css`;
    document.head.append(styleElem);

    return promiseElemLoad(styleElem);
}

function promiseElemLoad(elem) {
    return new Promise((resolve, reject) => {
        elem.onload = resolve;
        elem.onerror = reject;
    });
}
