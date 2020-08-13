export function mapObject(object, callback) {
    Object.keys(object).map(key => {
        return callback(key, object[key]);
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

export function handleLang(lang) {
    lang.label = lang.language_name;
    lang.value = lang.language_code; 
    return lang;
} 

export function getDirectionLabel(direction) {
    if (direction == null || direction == 'rtl') return 'Right To Left';
    return 'Left To Right'
}

export function getTranslations() {
    return window.translations;
}