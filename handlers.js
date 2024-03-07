const eventHandlers = {};

export function addHandler(selector, handler, eventName = 'click') {
    if (!(selector in eventHandlers)) {
        eventHandlers[selector] = {};
    }

    if (!(eventName in eventHandlers[selector])) {
        eventHandlers[selector][eventName] = new Set();
    }

    eventHandlers[selector][eventName].add(handler);
}

export function applyHandlers() {
    for (const selector of Object.keys(eventHandlers)) {
        for (const elem of document.querySelectorAll(selector)) {
            for (const [eventName, handlersList] of Object.entries(eventHandlers[selector])) {
                for (const handler of handlersList) {
                    elem.addEventListener(eventName, handler);
                }
            }
        }
    }
}
