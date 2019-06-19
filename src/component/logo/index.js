import React, { Component } from 'react';
import logoImg from './job.png';
import './logo.less';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="logo-container">
        <img src={logoImg} alt="logo" />
      </div>
    );
  }
}

export default Logo;
