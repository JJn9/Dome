import React, { Component } from 'react';

class Frame extends Component {

  static close() {
    const remote = require('electron').remote;
    const window = remote.getCurrentWindow();
    window.close();
  }

  static minimize() {
    const remote = require('electron').remote;
    const window = remote.getCurrentWindow();
    window.minimize();
  }

  static maximize() {
    const remote = require('electron').remote;
    const window = remote.getCurrentWindow();
    window.maximize();
  }

  render() {
    return (
      <div id="title-bar">
        <div id="frame-title">Dome</div>
        <div id="title-bar-btns">
          <button
            className="frame-btn"
            type="button"
            id="close-btn"
            onClick={Frame.close}
            aria-label="close"
          />
          <button
            className="frame-btn"
            type="button"
            id="min-btn"
            onClick={Frame.minimize}
            aria-label="min"
          />
          <button
            className="frame-btn"
            type="button"
            id="max-btn"
            onClick={Frame.maximize}
            aria-label="max"
          />
        </div>
      </div>
    );
  }
}

export default Frame;
