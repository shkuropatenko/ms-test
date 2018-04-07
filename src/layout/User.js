import React, { Component } from 'react';
import logoImg from '../images/user-img.jpg';

class User extends Component {
  render() {
    return (
      <div className="user-box">
      	<img src={logoImg} alt="logo" />
      </div>
    );
  }
}

export default User;