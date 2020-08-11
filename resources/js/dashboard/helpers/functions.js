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

export function getLanguages() {
    let languages = window.languages.map(lang => {
        return handleLang(lang);
    });
    return languages;
}

export function getCurrentLanguage() {
    return handleLang(window.currentLanguage);
}

function handleLang(lang) {
    lang.label = lang.name;
    lang.value = lang.code; 
    return lang;
} 