import React, { Component } from 'react';

class ListUser extends Component {
	state = {
	  	followers: 4356,
	  	following: 532
	}

  render() {
    return (
    	<ul className="list-user">
    		<li><a href="#">{ this.state.followers } <br/>Followers</a></li>
    		<li><a href="#">{ this.state.following } <br/>Following</a></li>
    	</ul>
    );
  }
}

export default ListUser;