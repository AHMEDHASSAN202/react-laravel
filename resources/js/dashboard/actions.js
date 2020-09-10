export const ALL_CHECKED = "ALL_CHECKED";
export const PAGE_LOADING = "PAGE_LOADING";
export const SECTION_LOADING = "SECTION_LOADING";
export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const UPDATE_TRANSLATE = 'UPDATE_TRANSLATE';

export function pageLoader(status) {
  return {
      TYPE: PAGE_LOADING,
      payload: status
    }
}

export function sectionLoader(status) {
    return {
        TYPE: SECTION_LOADING,
        payload: status
      }
}

export function updateTranslate(payload) {
    return {
        TYPE: UPDATE_TRANSLATE, 
        payload: payload
      }
}

