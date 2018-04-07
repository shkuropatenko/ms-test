import React, { Component } from 'react';
import Header from './layout/Header';
import User from './layout/User';
import ListUser from './layout/ListUser';
import Footer from './layout/Footer';

class wrap extends Component {
  render() {
    return (
      <div className="wrap-holder">
        <div className="main-block">
          <div className="main-holder">
            <div className="main-frame">
              <Header />
              <main>
                <User />
                <ListUser />
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default wrap;