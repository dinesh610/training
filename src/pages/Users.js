import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class Users extends Component {
  render() {
    console.log("connected to redux", this.props);
  const {users} = this.props
    return (
      <div>
        {users.map(item => (
  <div key={item.id}>{item.name}
  <p>{item.username}
  </p>
  <p>{item.email}</p>
  <p>{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode},{item.address.geo.lat},{item.address.geo.lng}
  </p><p>{item.phone}</p>
  <p>{item.website}</p>
  <p>{item.company.name}</p>,{item.company.catchPhrase},{item.company.bs}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({userReducer}) => {

  return userReducer;
};

export default connect(mapStateToProps)(Users);
