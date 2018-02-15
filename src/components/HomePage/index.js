import React, { Component } from 'react';

export default class HomePage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      videoURL: '../static/video/bg.mp4'
    };
  }

  render() {
    return (
      <div className="main_container">

        <div className="fullscreen-bg">
          <video className="fullscreen-bg__video" loop autoPlay muted poster="../../static/img/bg.jpg" >
            <source src={this.state.videoURL} type="video/mp4" />
          </video>
          <div className="overlay">  </div>
        </div>

        <div className="jumbotron col-sm-8 offset-sm-2 text-xs-center">
          <h1 className="display-4">Hello, amigos!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
      </div>
    );
  }
}