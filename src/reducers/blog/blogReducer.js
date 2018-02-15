import {
  BLOGPOSTS__REQUESTED__SUCCEEDED,
  BLOGPOST__DELETED__SUCCEEDED,
  BLOGPOST__REQUESTED__SUCCEEDED
} from '../../constants/actionTypes';

export default function blog(state = {
  blogPost: undefined,
  blogPosts: undefined,
}, action) {

  switch (action.type) {

    case BLOGPOST__REQUESTED__SUCCEEDED: {
      return action.payload;
    }
    case BLOGPOSTS__REQUESTED__SUCCEEDED: {
      return action.payload;
    }
    case BLOGPOST__DELETED__SUCCEEDED: {
      return action.payload;
    }

    default:
      return state;
  }

}