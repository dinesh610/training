import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    console.log("connected to redux", this.props);
  const { users} = this.props
    return (
      <div>
        {users.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({userReducer}) => {
  return userReducer;
};

export default connect(mapStateToProps)(Users);
