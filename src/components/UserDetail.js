import React, { Component } from 'react';
import UserInfo from './UserInfo';
import { connect }from 'react-redux';

function UserDetail (props){
  var user = props.user;
    return (
       <div>
        <UserInfo user={user} />
        <img src={user.avatar} />
      </div>
    );
}
// current user is what it cares about
function mapStateToProps(state){
  return {
    user:state.currentUser
  }
}

const usersContainer = connect(mapStateToProps)(UserDetail);
export default usersContainer
