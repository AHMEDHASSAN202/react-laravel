import React from 'react';
import mockData from './data';
import BrowseView from '../../components/BrowseView/BrowseView';
import Table from './Table';
import View from "../../helpers/View";
import ToolbarHideAdd from '../../components/BrowseView/ToolbarHideAdd';

class StoresApprovalListView extends View {

    title = 'Store Approvals';

    constructor(props, context) {
        super(props, context);
        this.state = {
            users: mockData
        }
    }

    handleClickRow = (e, user) => {
        this.props.history.push('/dashboard');
    }

    handleChangeInputSearch = (e) => {
        console.log(e.target.value);
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
                label="Store"
                handleChangeInputSearch={this.handleChangeInputSearch}
                handleDeleteClick={this.handleDeleteClick}
                ToolbarComponent={ToolbarHideAdd}
            >
                <Table data={this.state.users} handleClickRow={this.handleClickRow} handleClickEdit={this.handleClickEdit} />
            </BrowseView>
        );
    }
}

export default StoresApprovalListView;
