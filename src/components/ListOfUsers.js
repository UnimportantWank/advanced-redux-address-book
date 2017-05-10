import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from '../actions';
import {setSearchText} from '../actions';
import {ListOfUsersContainer} from '../containers/ListOfUsersContainer';


class ListOfUsers extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }
  render() {
    const filterUsers = this.props.users.filter((u) => {
      return u.first_name.indexOf(this.props.searchText) > -1;
    });

    var buttonText = "Hide";
    var userDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      const filterUsers = this.props.users.filter((u) => {
        return u.first_name.indexOf(this.props.searchText) > -1;
      });
      userDivs = filterUsers.map((user) => {
        return <div>
          {user.first_name}
          - {user.last_name}
          <a href="#" onClick={(e) => {
            e.preventDefault();
            this.props.chooseUser(user);
          }}>
            View
          </a>
        </div>
      });
    } else {
      buttonText = "Show";
      userDivs = "";
    }
    return (
      <div>
        <input onChange={(e) => {
          this.props.setSearchText(e.target.value)
        }}/>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }}>
          {buttonText}
        </button>
        {userDivs}
      </div>
    )
  }
}

export default ListOfUsers;
