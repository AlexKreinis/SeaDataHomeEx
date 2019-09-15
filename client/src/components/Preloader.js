import React, { Component } from 'react';
import './Preloader.css';

class Preloader extends Component {
  componentDidMount() {
    // Sets loading screen duration
    setTimeout(() => {
      document.querySelector('body').classList.add('loaded');
    }, 700);
  }

  render() {
    return (
      <div id="loader-wrapper">
        <div id="loader" />
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
    );
  }
}

export default Preloader;
