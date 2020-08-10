import { getDirection } from "./helpers/functions";

//initial app state
export const AppState = {
    title: "React",
    isAuthenticated: false,
    user: null,
    token: null,
    all_checked: [],
    pageLoading: false,
    sectionLoading: false,
    dir: getDirection()
};