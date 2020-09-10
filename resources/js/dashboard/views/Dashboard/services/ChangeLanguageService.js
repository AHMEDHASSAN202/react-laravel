import HTTP from "../../../helpers/HTTP";

export default function ChangeLanguageApi(lang) {
    const changeLanguageUrl = 'localization/languages/change';
    return HTTP.put(changeLanguageUrl, {lang});
}