import React from 'react';
import { AppContext } from '../AppContext';
import { PAGE_LOADING } from '../actions';

export default class View extends React.Component {

    title = '';

    static contextType = AppContext;
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setPageTitle(this.title);
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

}
