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