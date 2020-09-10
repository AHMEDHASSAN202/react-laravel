import HTTP from "../../../helpers/HTTP";

export function UpdateTranslateApi(languageCode, key, newValue) {
    if (!languageCode || !key || !newValue) return false;
    let updateTranslateUrl = 'localization/dashboard/translations/' + key;
    const data = {
        translation_lang: languageCode,
        translation_value: newValue
    };

    return HTTP.put(updateTranslateUrl, data);
}