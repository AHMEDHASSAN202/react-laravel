import React from 'react';
import mockData from './data';
import BrowseView from '../../components/BrowseView/BrowseView';
import Table from './Table';
import View from "../../helpers/View";
import { SECTION_LOADING } from '../../actions';

class StoresListView extends View {

    title = 'Stores';

    constructor(props, context) {
        super(props, context);
        this.state = {
            users: []
        }
    }

    handleClickRow = (e, user) => {
        this.props.history.push('/dashboard');
    }

    handleChangeInputSearch = (e) => {
        console.log(e.target.value);
    }

    handleAddClick = () => {
        console.log('Add Click');
    }

    handleDeleteClick = (selected) => {
        console.log(selected);
    }

    handleClickEdit = (e, user) => {
        console.log(user);
    }

    init() {
        this.context.dispatch({TYPE: SECTION_LOADING, payload: true});
        setTimeout(() => {
            this.context.dispatch({TYPE: SECTION_LOADING, payload: false});
            this.setState({users: mockData})
        }, 2000);
    }

    render () {
        return (
            <BrowseView
                title={this.title}
                label="Store"
                handleChangeInputSearch={this.handleChangeInputSearch}
                handleAddClick={this.handleAddClick}
                handleDeleteClick={this.handleDeleteClick}
            >
                <Table data={this.state.users} handleClickRow={this.handleClickRow} handleClickEdit={this.handleClickEdit} />
            </BrowseView>
        );
    }
}

export default StoresListView;
