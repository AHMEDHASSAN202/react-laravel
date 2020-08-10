export function mapObject(object, callback) {
    Object.keys.map(key => {
        callback(key, object[key]);
    });
}

export function isUrl(link, path = location.pathname) {
    if (path === link) {
        return true;
    }
    return false;
};

export function getDirection() {
    let dir = document.body.getAttribute('dir');
    return dir ? dir : 'ltr';
}