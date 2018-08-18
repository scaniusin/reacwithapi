import React, { Component } from 'react';
import { Link } from 'react-router';

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
          <div className="overlay"/>
        </div>

        <div className="jumbotron-main col-sm-8 offset-sm-2 text-xs-center">
          <h1 className="display-4">Hello, amigos!</h1>
          <p className="lead">Welcome to test Application that uses Symfony, ReactJs, Blockchain technologies!</p>
          <hr className="my-4"/>
            <p>Barba Non Facit Philosophum.</p>
            <p className="lead">
              <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>
            </p>
        </div>
      </div>
    );
  }
}