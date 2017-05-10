import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsersContainer from './containers/ListOfUsersContainer';

function App (props){
    return (
      <div>
        <ListOfUsersContainer
        filterUsers={props.filterUsers}
        chooseUser={props.chooseUser}
        users={props.users} />
        <UserDetail user={props.user} />
      </div>
    );
}

export default App;
