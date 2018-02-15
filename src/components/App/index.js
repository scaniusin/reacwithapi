import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import "babel-es6-polyfill";
import NavBar from '../Navbar/index';
import { Container, Row } from 'reactstrap';
import font from 'font-awesome/css/font-awesome.css'; //for spinner
import NotificationContainer from '../../containers/NotificationContainer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <NavBar
          auth={this.props.auth}
        />

        <Container className="content-wrapper">
          <Row>
            {this.props.children}
          </Row>
        </Container>

        <NotificationContainer />
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
