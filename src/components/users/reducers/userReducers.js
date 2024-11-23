import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
  } from '../actions/userActions';
  
  const initialState = {
    loading: false,
    user: null,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null
        };
  
      case CREATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          user: null,
          error: action.error
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  