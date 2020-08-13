import React from 'react';
import View from "../../../helpers/View";
import { SECTION_LOADING, ADD_LANGUAGE } from '../../../actions';
import Table from './Table';
import BrowseSmallTableView from '../../../components/BrowseSmallTable/BrowseSmallTableView';
import {CardHeader, CardContent, Divider, CardActions, TextField, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import ButtonLoading from '../../../components/ButtonLoading/ButtonLoading';
import { withStyles } from '@material-ui/styles';
import SelectComponent from '../../../components/Inputs/SelectComponent';
import CheckboxComponent from '../../../components/Inputs/CheckboxComponent';
import { handleLang } from './../../../helpers/functions';

const style = (theme) => {
    return {
        content: {
            '& > *': {
                marginBottom: theme.spacing(2)
            },
        }
    };
}

class LanguagesListView extends View {

    title = 'Languages';

    constructor(props, context) {
        super(props, context);
        this.state = {
            form: {
                name: '',
                code: '',
                direction: 'ltr',
                display_front: false,
            },
            submitLoading: false
        }
    }

    options = [
        {label: 'Left To Right', value: 'ltr'},
        {label: 'Right To Left', value: 'rtl'}
    ];

    handleDeleteClick = (selected) => {
        console.log(selected);
    }

    handleClickEdit = (e, lang) => {
        console.log(lang);
    }

    handleClickDelate = (e, lang) => {
        console.log(lang);
    }

    handleButtonClick = (e) => {
        let lang = handleLang(this.state.form);
        lang.id = Math.random();
        this.context.dispatch({TYPE: ADD_LANGUAGE, payload: lang})
    };

    handleChange = (e) => {
        let v = Object.assign(this.state);
        v.form[e.target.name] = e.target.value;
        this.setState(v);
        console.log(this.state.form)
    }

    handleChangeCheckbox = () => {
        let {form} = this.state;
        form.display_front = !form.display_front;
        this.setState({...this.state, form});
    }

    init() {
        this.context.dispatch({TYPE: SECTION_LOADING, payload: true});
        setTimeout(() => {
            this.context.dispatch({TYPE: SECTION_LOADING, payload: false});
        }, 1000);
    }

    render () {
        return (
            <BrowseSmallTableView 
            title={this.title} 
            Table={<Table data={this.context.data.languages} 
            handleClickEdit={this.handleClickEdit} handleClickDelate={this.handleDeleteClick} />} 
            >
                <CardHeader
                    title="Create Language"
                    subheader="create new language now"
                />
                <Divider style={{width: '100%'}} />
                <CardContent style={{width: '100%'}} className={this.props.classes.content}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.form.name}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Code"
                    name="code"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.form.code}
                    variant="outlined"
                />
                <SelectComponent label="Direction" name="direction" options={this.options} value={this.state.form.direction} handleChange={this.handleChange} />
                <CheckboxComponent label="Display Front" name="display_front" checked={this.state.form.display_front} handleChange={this.handleChangeCheckbox} />
                </CardContent>
                <Divider style={{width: '100%'}} />
                <CardActions>
                    <ButtonLoading btnLabel="Save" loading={this.state.submitLoading} handleButtonClick={this.handleButtonClick}/>
                </CardActions>
            </BrowseSmallTableView>
        );
    }
}


export default withStyles(style)(LanguagesListView);
