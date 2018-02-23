import React, { Component } from 'react';
import Form from '../../components/BlogPost/Form';
import {createBlogPost} from '../../connectivity/blog/api.blog-post';
// import { withRouter } from 'react-router';

export default class Create extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    createBlogPost(data)
    .then(() => {
        this.props.router.push("/posts").bind(this);
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>  </Form>
      </div>
    );
  }
}