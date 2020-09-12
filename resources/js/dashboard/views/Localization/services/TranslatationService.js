import HTTP from "../../../helpers/HTTP";
import { DashboardUrl } from "../../../Config";

export function UpdateTranslateApi(languageCode, key, newValue) {
    if (!languageCode || !key || !newValue) return false;
    let updateTranslateUrl = DashboardUrl + '/localization/translations/' + key;
    const data = {
        translation_lang: languageCode,
        translation_value: newValue
    };

    return HTTP.put(updateTranslateUrl, data);
}