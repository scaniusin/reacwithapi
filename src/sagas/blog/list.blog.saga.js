import * as api from '../../connectivity/blog/api.blog-post';
import {call, put} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import * as types from '../../constants/actionTypes';
// import {stopSubmit} from 'redux-form';
// import formErrorHelper from '../../helpers/formErrorHelper';

export const REQUESTS = {
  BLOGPOSTS__DOREQUESTBLOGPOST__SAGA: 'blogPosts.doRequestBlogPost.saga',

  BLOGPOSTS__DOREQUESTBLOGPOSTS__SAGA: 'blogPosts.doRequestBlogPosts.saga',

  BLOGPOSTS__DODELETEBLOGPOST__SAGA: 'blogPosts.doDeleteBlogPost.saga',

  BLOGPOSTS__DOEDITBLOGPOST__SAGA: 'blogPosts.doEditBlogPost.saga',
};

export function *doRequestBlogPost(action) {

  try {

    const {id} = action.payload;

    yield put({
      type: types.REQUEST__STARTED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DOREQUESTBLOGPOST__SAGA
      }
    });

    const blogPost = yield call(api.fetchBlogPost, id);

    yield put({
      type: types.BLOGPOST__REQUESTED__SUCCEEDED,
      payload: {
        blogPost
      }
    });

  } catch (e) {

    yield put({
      type: types.REQUEST__FAILED,
      payload: {
        message: e.message,
        statusCode: e.statusCode
      }
    });

    yield put({
      type: types.BLOGPOST__REQUESTED__FAILED,
      payload: {
        response: e.response
      }
    });

  } finally {

    yield put({
      type: types.REQUEST__FINISHED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DOREQUESTBLOGPOST__SAGA
      }
    });

  }

}

export function *watchRequestBlogPost() {
  yield* takeLatest(types.BLOGPOST__REQUESTED, doRequestBlogPost);
}

export function *doRequestBlogPosts() {

  try {

    yield put({
      type: types.REQUEST__STARTED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DOREQUESTBLOGPOSTS__SAGA
      }
    });

    const blogPosts = yield call(api.fetchBlogPosts);

    yield put({
      type: types.BLOGPOSTS__REQUESTED__SUCCEEDED,
      payload: {
        blogPosts
      }
    });

  } catch (e) {

    yield put({
      type: types.REQUEST__FAILED,
      payload: {
        message: e.message,
        statusCode: e.statusCode
      }
    });

    yield put({
      type: types.BLOGPOSTS__REQUESTED__FAILED,
      payload: {
        response: e.response
      }
    });

  } finally {

    yield put({
      type: types.REQUEST__FINISHED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DOREQUESTBLOGPOSTS__SAGA
      }
    });

  }

}

export function *watchRequestBlogPosts() {
  yield* takeLatest(types.BLOGPOSTS__REQUESTED, doRequestBlogPosts);
}


export function *doDeleteBlogPost(action) {

  try {

    const {blogPostId, fullBlogPosts} = action.payload;

    yield put({
      type: types.REQUEST__STARTED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DODELETEBLOGPOST__SAGA
      }
    });

    const responseBody = yield call(api.deleteBlogPost, blogPostId);
    const blogPosts = fullBlogPosts.filter((post) => {
            return blogPostId !== post.id;
          });

    yield put({
      type: types.BLOGPOST__DELETED__SUCCEEDED,
      payload: {
        message: responseBody,
        blogPosts
      }
    });

    yield put({
      type: types.ADD_NOTIFICATION,
      payload: {
        //action.payload.message
        message: "The Blog Post was successfully deleted.",
        level: 'success'
      }
    });

    // yield call(doRequestBlogPosts); //call second action no need -> filter from container

  } catch (e) {

    yield put({
      type: types.REQUEST__FAILED,
      payload: {
        message: e.message,
        statusCode: e.statusCode
      }
    });

    yield put({
      type: types.BLOGPOST__DELETED__FAILED,
      payload: {
        response: e.response
      }
    });

  } finally {

    yield put({
      type: types.REQUEST__FINISHED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DODELETEBLOGPOST__SAGA
      }
    });

  }
}

export function *watchDeleteBlogPost() {
  yield* takeLatest(types.BLOGPOST__DELETED__REQUESTED, doDeleteBlogPost);
}

export function *doEditBlogPost(action) {

  try {

    const {id, data} = action.payload;

    yield put({
      type: types.REQUEST__STARTED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DOEDITBLOGPOST__SAGA
      }
    });

    const responseBody = yield call(api.updateBlogPost, id, data);

    yield put({
      type: types.BLOGPOST__EDITED__SUCCEEDED,
      payload: {
        message: responseBody
      }
    });

    yield put({
      type: types.ADD_NOTIFICATION,
      payload: {
        //action.payload.message
        message: "The Blog Post was successfully edited.",
        level: 'success'
      }
    });

  } catch (e) {

    yield put({
      type: types.REQUEST__FAILED,
      payload: {
        message: e.message,
        statusCode: e.statusCode
      }
    });

    yield put({
      type: types.BLOGPOST__EDITED__FAILED,
      payload: {
        response: e.response
      }
    });

  } finally {

    yield put({
      type: types.REQUEST__FINISHED,
      payload: {
        requestFrom: REQUESTS.BLOGPOSTS__DOEDITBLOGPOST__SAGA
      }
    });

  }
}

export function *watchEditBlogPost() {
  yield* takeLatest(types.BLOGPOST__EDITED__REQUESTED, doEditBlogPost);
}