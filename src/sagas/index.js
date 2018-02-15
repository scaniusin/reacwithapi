import {fork} from 'redux-saga/effects';
import * as authSaga from './user/auth.saga';
import * as profileSaga from './user/profile.saga';
import * as registrationSaga from './user/register.saga';
import * as blogPostSaga from './blog/list.blog.saga';

export default function *rootSaga() {
  yield [
    fork(authSaga.watchLogin),
    fork(authSaga.watchLoginSucceeded),
    fork(authSaga.watchLoginFailed),

    fork(authSaga.watchLogoutRequested),

    fork(profileSaga.watchChangePassword),
    fork(profileSaga.watchChangePasswordSucceeded),
    fork(profileSaga.watchChangePasswordFailed),
    fork(profileSaga.watchRequestProfile),

    fork(registrationSaga.watchRequestRegistration),
    fork(registrationSaga.watchRegistrationFailed),
    fork(registrationSaga.watchRegistrationSuccess),

    fork(blogPostSaga.watchRequestBlogPost),
    fork(blogPostSaga.watchRequestBlogPosts),
    fork(blogPostSaga.watchDeleteBlogPost),
    fork(blogPostSaga.watchEditBlogPost),
  ];
}