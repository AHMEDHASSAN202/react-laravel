import React from 'react';
import mockData from './data';
import BrowseView from '../../components/BrowseView/BrowseView';
import Table from './Table';
import View from "../../helpers/View";
import { SECTION_LOADING } from '../../actions';

class StoresListView extends View {

    title = 'Stores';

    constructor(props) {
        super(props);
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

    handleAddClick = () => {
        console.log('Add Click');
    }

    handleDeleteClick = (selected) => {
        console.log(selected);
    }

    handleClickEdit = (e, user) => {
        console.log(user);
    }

    componentDidMount() {
        const {dispatch} = this.context;
        setTimeout(() => {
            dispatch({TYPE: SECTION_LOADING, payload: false});
        }, 5000);
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
