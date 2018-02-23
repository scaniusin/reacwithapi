import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
// import {fetchBlogPosts, deleteBlogPost} from '../../connectivity/blog/api.blog-post';
import Table from '../../components/BlogPost/Table';
import * as types from '../../constants/actionTypes';
import {REQUESTS} from '../../sagas/blog/list.blog.saga'

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
    //method without saga
    // fetchBlogPosts()
    //   .then((data) => {
    //     this.setState(state => {
    //       state.blogPosts = data;
    //       return state;
    //     });
    //   })
    //   .catch((err) => {
    //     console.error('err', err);
    //   });

    this.props.dispatch({
      type: types.BLOGPOSTS__REQUESTED,
      payload: {
        blog: this.props.blogPosts
      }
    });
  }

  onDelete(id) {
    //method without saga
    // deleteBlogPost(id)
    //   .then((data) => {
    //     let blogPosts = this.state.blogPosts.filter((post) => {
    //       return id !== post.id;
    //     });
    //
    //     this.setState(state => {
    //       state.blogPosts = blogPosts;
    //       return state;
    //     });
    //   })
    //   .catch((err) => {
    //     console.error('err', err);
    //   });
    this.props.dispatch({
      type: types.BLOGPOST__DELETED__REQUESTED,
      payload: {
        blogPostId: id,
        fullBlogPosts: this.props.blogPosts
      }
    });
  }

  render() {
    const isSubmitting = this.props.pageState.request.inProgress.indexOf(REQUESTS.BLOGPOSTS__DOREQUESTBLOGPOSTS__SAGA) > -1;
    // let blogPosts = this.state.blogPosts;
    let blogPosts = this.props.blogPosts;

    return (
      <div>
        <h3>BLOG POSTS: </h3>
        <Table blogPosts={blogPosts}
               onDelete={this.onDelete.bind(this)}
               auth={this.props.auth}
               isSubmitting={isSubmitting}
        />
      </div>
    );
  }
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  pageState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    blogPosts: state.blog.blogPosts,
    pageState: state
  };
}

export default connect(
  mapStateToProps
)(List);