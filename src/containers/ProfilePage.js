import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProfileArea from '../components/ProfileArea';
import ChangePasswordForm from '../components/ChangePasswordForm';
import * as types from '../constants/actionTypes';

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: types.PROFILE__REQUESTED,
      payload: {
        userId: this.props.pageState.auth.id
      }
    });

  }

  handleChangePassword(formData) {
    const {currentPassword, newPassword, newPasswordRepeated} = formData;

    this.props.dispatch({
      type: types.CHANGE_PASSWORD__REQUESTED,
      payload: {
        userId: this.props.pageState.auth.id,
        currentPassword,
        newPassword,
        newPasswordRepeated,
      }
    });
  }

  render() {

    const {
      username = 'someone',
      email = 'someones@email.com'
    } = this.props.pageState.profile;

    return (
      <div>
        <ProfileArea username={username} emailAddress={email}/>

        <ChangePasswordForm onSubmit={this.handleChangePassword} />
      </div>
    );
  }

}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pageState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    pageState: state
  };
}

export default connect(mapStateToProps)(ProfilePage);