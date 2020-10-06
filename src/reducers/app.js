import {
  APP_ACTIONS
} from '../actions/app';

const defaultState = {
  theme: 'dark',
  dialog: {
    open: false,
    title: "",
    content: []
  }
}

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;