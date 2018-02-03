import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import "babel-es6-polyfill";
import NavBar from './NavBar';
import { Container, Row } from 'reactstrap';
import font from 'font-awesome/css/font-awesome.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      videoURL: '../static/video/bg.mp4'
    };
  }

  render() {
    return (
      <div className="main_container">

        <div className="video_container">
          <video className="homepage_bg_video" loop autoPlay muted poster="../static/img/bg.jpg" >
            <source src={this.state.videoURL} type="video/mp4" />
          </video>
          <div className="overlay">  </div>
        </div>

        <NavBar
          auth={this.props.auth}
        />

        <Container className="content-wrapper">
          <Row>
            {this.props.children}
          </Row>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps
)(App);
