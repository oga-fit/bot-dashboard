import {
  USER_ACTIONS
} from "../actions/user";

const initialState = {

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.GET_PERMISSIONS:
      return {
        ...state,
        permissions: []
      }
      default:
        return state;
  }
};

export default userReducer;