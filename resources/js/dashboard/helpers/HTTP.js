import { mapObject } from "./functions";

export default class HTTP {

    static common(method, url, data = {}) {
        return axios[method](url, data).then(response => {
            const {status, data} = response;
            return {status, data};
        });
    }

    /**
     * Get Action HTTP
     * 
     * @param {string} url 
     * @param {object} queryObject 
     */
    static get(url, queryObject = {}) {
        if (queryObject) {
            url += '?';
            mapObject(queryObject, function (key, value) {
                url += key + '=' + value + '&';
            });
            url = url.slice(0, -1);
        }
        return HTTP.common('get', url);
    }

    /**
     * Post Action HTTP
     * 
     * @param {string} url 
     * @param {object} data 
     */
    static post(url, data = {}) {
        return HTTP.common('post', url, data);
    }

    /**
     * PUT Action HTTP
     * 
     * @param {string} url 
     * @param {object} data 
     */
    static put(url, data = {}) {
        return HTTP.common('put', url, data)
    }

    /**
     * Patch Action HTTP
     * 
     * @param {string} url 
     * @param {object} data 
     */
    static patch(url, data = {}) {
        return HTTP.common('patch', url, data);
    }

    /**
     * Delete Action HTTP
     * 
     * @param {string} url 
     * @param {object} data 
     */
    static delete(url, data = {}) {
        return HTTP.common('delete', url, data);
    }

} 