import HTTP from "../../../helpers/HTTP";

export default function ChangeLanguageApi(default_lang) {
    const changeLanguageUrl = 'visitors/information';
    return HTTP.put(changeLanguageUrl, {default_lang});
}