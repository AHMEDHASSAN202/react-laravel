import React from 'react';
import mockData from './data';
import BrowseView from '../../components/BrowseView/BrowseView';
import Table from './Table';
import View from "../../helpers/View";

class UsersListView extends View {

    title = 'Users';

    constructor(props, context) {
        super(props, context);
        this.state = {
            users: mockData
        }
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

    render () {
        return (
            <BrowseView
                title={this.title}
                label="User"
                handleChangeInputSearch={this.handleChangeInputSearch}
                handleAddClick={this.handleAddClick}
                handleDeleteClick={this.handleDeleteClick}
            >
                <Table data={this.state.users}  handleClickEdit={this.handleClickEdit} />
            </BrowseView>
        );
    }
}

export default UsersListView;
