import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import auth from './authReducer';
import profile from './profileReducer';
import request from './requestReducer';
import notification from './notificationReducer';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  auth,
  notification,
  profile,
  request,
});

export default rootReducer;