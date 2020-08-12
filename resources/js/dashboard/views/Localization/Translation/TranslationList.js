import React from 'react';
import View from "../../../helpers/View";
import { SECTION_LOADING } from '../../../actions';
import Table from './Table';
import ButtonLoading from '../../../components/ButtonLoading/ButtonLoading';
import { withStyles } from '@material-ui/styles';
import PageComponent from './../../../components/PageComponent';

import data from './data';
import { LinearProgress } from '@material-ui/core';

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
        this.state = {translations: data}
    }

    handleChangeInput = (e, i, languageCode) => {
        let translations = [...this.state.translations];
        translations[i][languageCode] = e.target.value;
        this.setState({translations})
    }

    handleUpdate = (row) => {
        console.log(row)
    }

    init() {
        this.context.dispatch({TYPE: SECTION_LOADING, payload: true});
        setTimeout(() => {
            this.context.dispatch({TYPE: SECTION_LOADING, payload: false});
        }, 2000);
    }

    render () {
        return (
            <PageComponent
                title={this.title}
            >
                {this.context.data.sectionLoading ? <LinearProgress /> : ''}
                <Table data={this.state.translations} languages={this.context.data.languages} handleChangeInput={this.handleChangeInput} handleUpdate={this.handleUpdate} />
            </PageComponent>
        );
    }
}


export default withStyles(style)(TranslationListView);
