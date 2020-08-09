import React from 'react';
import { AppContext } from '../AppContext';
import { PAGE_LOADING } from '../actions';

export default class View extends React.Component {

    title = '';

    static contextType = AppContext;
    
    constructor(props, context) {
        super(props, context);
        this.context.dispatch({TYPE: PAGE_LOADING, payload: true});
    }

    componentDidMount() {
        this.context.dispatch({TYPE: PAGE_LOADING, payload: false});
        this.setPageTitle(this.title);
        this.init();
    }

    componentWillUnmount() {
        this.destroy();
    }

    setPageTitle(title) {
        document.title = title;
    }

    setMeta(metaName, contentMeta) {
        document.querySelector('meta[name="'+ metaName +'"]').content = contentMeta
    }

    setFavicon(path) {
        document.querySelector('link[rel="icon"]').href = path;
    }

    init() {}

    destroy() {}

}
