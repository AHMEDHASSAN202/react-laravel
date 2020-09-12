import HTTP from "../../../helpers/HTTP";
import { WebUrl } from "../../../Config";

export default function ChangeLanguageApi(default_lang) {
    const changeLanguageUrl = WebUrl + '/visitors/information';
    return HTTP.put(changeLanguageUrl, {default_lang});
}