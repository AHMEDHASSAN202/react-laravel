import React from 'react';
import View from "../../../helpers/View";
import Table from './Table';
import { withStyles } from '@material-ui/styles';
import BrowseView from '../../../components/BrowseView/BrowseView';
import ToolbarWithSearch from './../../../components/BrowseView/ToolbarWithSearch';
import { SECTION_LOADING } from '../../../actions';

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
        this.state = {
            translations: Object.keys(context.data.translations),
            translationsFilters: Object.keys(context.data.translations),
        }
    }
    
    handleChangeInputSearch = (event) => {
        let {value} = event.target;
        if (value == '') {
            return this.setState({translationsFilters: this.state.translations})
        }
        let search = [];
        this.state.translations.map(val => {
            if (val.indexOf(value) !== -1) {
                search.push(val);
            }
        })
        this.setState({translationsFilters: search});
    }

    generatePagination = (perpage, page) => {
        let offset = perpage * page;
        let limit = perpage + offset;
        return this.state.translations.slice(offset, limit)
    }
    
    handlePageChange = (page, perpage) => {
        this.setPagination(perpage, page);
    }

    handleRowsPerPageChange = (perpage, page) => {
        this.setPagination(perpage, page);
    }
    
    setPagination = (perpage, page) => {
        let d = this.generatePagination(perpage, page);
        this.setState({translationsFilters: d});
    }
    

    init() {
        this.setPagination(10, 0);
        this.context.dispatch({TYPE: SECTION_LOADING, payload: true});
        setTimeout(() => {
            this.context.dispatch({TYPE: SECTION_LOADING, payload: false});
        }, 1000);
    }

    render () {
        return (
            <BrowseView title={this.title} ToolbarComponent={ToolbarWithSearch} handleChangeInputSearch={this.handleChangeInputSearch}>
                <Table 
                    data={this.state.translationsFilters} 
                    languages={this.context.data.languages}
                    handlePageChange={this.handlePageChange}
                    handleRowsPerPageChange={this.handleRowsPerPageChange}
                    count={this.state.translations.length}
                />
            </BrowseView>   
        );
    }
}


export default withStyles(style)(TranslationListView);
