import {
  configureStore
} from '@reduxjs/toolkit';

// Reducers
import app from "./reducers/app";
import user from "./reducers/user";

export default configureStore({
  reducer: {
    app,
    user
  },
});