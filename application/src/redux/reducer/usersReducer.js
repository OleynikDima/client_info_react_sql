import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const users = createReducer([], {});

export default combineReducers({
  users,
});
