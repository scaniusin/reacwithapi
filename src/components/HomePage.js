// /src/App.js

import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/posts', {
      method: 'GET',
      mode: 'CORS'
    }).then(res => res.json())
      .then(data => {
        this.setState({
          blogPosts: data
        })
      }).catch(err => err);

  }

  render() {
    return (
      <div className="col-sm-10 offset-sm-2">
        <h3>BLOG POSTS:</h3>

        <table className="table table-hover table-responsive">
          <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Options</th>
          </tr>
          </thead>
          <tbody>

          {this.state.blogPosts && this.state.blogPosts.map(post => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <a href="#" className="btn btn-default btn-sm">Edit</a>
                  <a href="#" className="btn btn-danger btn-sm">Delete</a>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}