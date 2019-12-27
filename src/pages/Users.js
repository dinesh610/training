import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const User = styled.div`
  width: 250px;
  height: 400px;
  color: blueviolet;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  // border: 1px solid #DDD;
  flex-flow: column nowrap;
  
  .user-address {
  width: 90%;
  height: 200px;
  color: blueviolet;
  border-radius: 5px;
  background: linear-gradient(to right, #dda383, #ddd);
  padding: 5px;  
  margin-top: 10px;
  }
  
  .user-header {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  }
`;

const UserInfo = styled.div`
  width: 90%;
  height: 100px;
  color: blueviolet;
  border-radius: 5px;
  background: linear-gradient(to right, #dda383, #ddd);
  padding: 5px;
  
  .user-header {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  }
`;



const UserContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

class Users extends Component {
  render() {
    console.log("connected to redux", this.props);
    const { users } = this.props;
    return (
      <UserContainer>
        {users.map(item => (
          <User key={item.id}>
            <UserInfo>
              <div className="user-header"> User Name: </div>
              <div>{item.name}</div>
              <div className="user-header">Email:</div>
              <div>{item.email}</div>
            </UserInfo>

            <div className="user-address">
              {item.address.street},{item.address.suite},{item.address.city},
              {item.address.zipcode},{item.address.geo.lat},
              {item.address.geo.lng}
            </div>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.company.name}</p>,{item.company.catchPhrase},
            {item.company.bs}
          </User>
        ))}
      </UserContainer>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return userReducer;
};

export default connect(mapStateToProps)(Users);
