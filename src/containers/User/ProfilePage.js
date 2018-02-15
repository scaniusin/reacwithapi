import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProfileArea from '../../components/User/ProfileArea';
import ChangePasswordForm from '../../components/User/ChangePasswordForm';
import * as types from '../../constants/actionTypes';
import {REQUESTS} from '../../sagas/user/profile.saga';

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
      username = '****',
      email = '***\'***@***.***'
    } = this.props.pageState.profile;

    const isSubmitting = this.props.pageState.request.inProgress.indexOf(REQUESTS.PROFILE__DOCHANGEPASSWORD__SAGA) > -1;

    return (
      <div className="col-md-4 offset-md-4">
        <ProfileArea username={username} emailAddress={email}/>
        <ChangePasswordForm
          isSubmitting={isSubmitting}
          onSubmit={this.handleChangePassword.bind(this)} />
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