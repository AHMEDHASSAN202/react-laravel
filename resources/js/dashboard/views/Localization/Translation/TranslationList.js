import React from 'react';
import View from "../../../helpers/View";
import { SECTION_LOADING } from '../../../actions';
import Table from './Table';
import { withStyles } from '@material-ui/styles';
import BrowseView from '../../../components/BrowseView/BrowseView';
import ToolbarWithSearch from './../../../components/BrowseView/ToolbarWithSearch';
import { mapObject } from '../../../helpers/functions';

const style = (theme) => {
    return {
        content: {
            '& > *': {
                marginBottom: theme.spacing(2)
            },
        }
    };
}

class TranslationListView extends View {

    title = 'Translations';

    constructor(props, context) {
        super(props, context);
        this.state = {translationsSearch: context.data.translations}
    }
    
    handleChangeInputSearch = (event) => {
        let {value} = event.target;
        if (value == '') {
            return this.setState({translationsSearch: this.context.data.translations})
        }
        let search = {};
        const {translations} = this.context.data;
        mapObject(translations, (key, val) => {
            if (key.indexOf(value) !== -1) {
                search[key] = val;
            }
        })
        this.setState({translationsSearch: search});
    }


    init() {
        this.context.dispatch({TYPE: SECTION_LOADING, payload: true});
        setTimeout(() => {
            this.context.dispatch({TYPE: SECTION_LOADING, payload: false});
        }, 2000);
    }

    render () {
        return (
            <BrowseView title={this.title} ToolbarComponent={ToolbarWithSearch} handleChangeInputSearch={this.handleChangeInputSearch}>
                <Table 
                    data={this.state.translationsSearch} 
                    languages={this.context.data.languages} 
                />
            </BrowseView>   
        );
    }
}


export default withStyles(style)(TranslationListView);
