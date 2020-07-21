import React, { useState } from 'react';
import mockData from './data';
import BrowseView from '../../components/BrowseView/BrowseView';
import { useHistory } from 'react-router-dom';

const UserList = (props) => {
  const [users] = useState(mockData);
  const history = useHistory();
  
  const handleClickRow = (user) => {
    history.push('/dashboard');
  }

  const handleChangeInputSearch = (e) => {
    console.log(e.target.value);
  }

  const handleAddClick = () => {
    console.log('Add Click');
  }

  const handleDeleteClick = (selected) => {
    console.log(selected);
  }

  return (
    <BrowseView 
      title="User" 
      label="User" 
      data={users} 
      handleChangeInputSearch={handleChangeInputSearch} 
      handleClickRow={handleClickRow}
      handleAddClick={handleAddClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default UserList;
