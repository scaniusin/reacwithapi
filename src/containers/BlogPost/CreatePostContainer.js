import React, {Component, PropTypes} from 'react';
import Form from '../../components/BlogPost/Form';
import {createBlogPost} from '../../connectivity/blog/api.blog-post';
import {connect} from "react-redux";
// import { withRouter } from 'react-router';

class Create extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    createBlogPost(data, this.props.pageState.auth.id)
    .then((res) => {
        // console.log(res);
        this.props.router.push("/posts");
    });
  }

  render() {
      console.log('userID:', this.props.pageState.auth.id);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

Create.propTypes = {
  router: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        pageState: state
    };
}

export default connect(mapStateToProps)(Create);