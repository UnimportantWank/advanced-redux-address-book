import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from '../actions';
import {setSearchText} from '../actions';
import ListOfUsers from '../components/ListOfUsers';

//search for whats typed dynamically
function mapStateToProps(state) {
  return {users: state.users,
          searchText: state.searchText
  }
}
//change the user from the user object
function mapDispatchToProps(dispatch) {
  return {
    chooseUser: function(user) {
      dispatch(setCurrentUser(user));
    },
    setSearchText: function(user) {
      dispatch(setSearchText(user));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
