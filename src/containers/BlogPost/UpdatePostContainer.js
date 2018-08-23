import React, {PropTypes} from 'react';
import Form from '../../components/BlogPost/Form';
import * as types from "../../constants/actionTypes";
import {connect} from "react-redux";
// import { fetchBlogPost, updateBlogPost } from '../../connectivity/blog/api.blog-post';
// import { withRouter } from 'react-router';
// import {REQUESTS} from "../../sagas/blog/list.blog.saga";

class Update extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = {
    //   blogPost : []
    // };
  }

  componentDidMount() {
    // without saga
    // fetchBlogPost(this.props.params.postId)
    //   .then((data) => {
    //     this.setState(state => {
    //       state.blogPost = data;
    //       return state;
    //     });
    //   })
    //   .catch((err) => {
    //     console.error('err', err);
    //   });
    this.props.dispatch({
      type: types.BLOGPOST__REQUESTED,
      payload: {
        id: this.props.params.postId
      }
    });
  }

  handleSubmit(data) {
    // updateBlogPost(this.state.blogPost.id, data)
    //   .then(res => {
    //     this.props.router.push('/');
    //   });

    this.props.dispatch({
      type: types.BLOGPOST__EDITED__REQUESTED,
      payload: {
        id: this.props.params.postId,
        data,
        uid: this.props.pageState.auth.id
      }
    });
    this.props.router.push('/posts');
  }

  render() {
    console.log(this.props.blogPost);
    let title = '';
    let body = '';
    if(this.props.blogPost){
      title = this.props.blogPost.title;
      body = this.props.blogPost.body;
    }else{
      title = "Loading...";
      body = "Loading...";
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}
              title={title}
              body={body}
        />
      </div>
    );
  }
}

Update.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pageState: PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
  blogPost: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    pageState: state,
    blogPost: state.blog.blogPost
  };
}

export default connect(mapStateToProps)(Update);