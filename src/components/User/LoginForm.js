import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'reactstrap';

const LoginForm = (props) => {
  return (
    <div className="col-md-4 offset-md-4">
      <h3 className="text-xs-center">Login</h3>
      <form onSubmit={props.handleSubmit} className="form-signin">

        <Field component="input"
               name="username"
               type="text"
               placeholder="Username or email address"
               required="required"
               className="form-control"
        />

        <Field component="input"
               name="password"
               type="password"
               placeholder="Password"
               required="required"
               className="form-control"
        />

        <Button type="submit"
                size="lg"
                block
                color="success"
        >
          {props.isSubmitting ?
            <span>
              <i className="fa fa-spin fa-spinner"/>
              Logging In...
            </span>
            :
            <span>Login</span>
          }
        </Button>
      </form>
    </div>
  );

};

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  // submitting: React.PropTypes.bool.isRequired
  isSubmitting: React.PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'login'
})(LoginForm);