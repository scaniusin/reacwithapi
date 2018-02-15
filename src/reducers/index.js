import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import auth from './user/authReducer';
import profile from './user/profileReducer';
import request from './requestReducer';
import notification from './notificationReducer';
import blog from './blog/blogReducer';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  auth,
  notification,
  profile,
  request,

  blog
});

export default rootReducer;