import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import usersAction from '../action/usersAction';

const initialData = [];

const getAllUsers = (state, action) => {
  console.log(action);
  return action.payload;
};
const getInfoUserClicksAndView = (state, action) => {
  console.log(action);
};

const users = createReducer(initialData, {
  [usersAction.axiosUserSuccess]: getInfoUserClicksAndView,
  [usersAction.axiosAllUsersSuccess]: getAllUsers,
});

export default combineReducers({
  users,
});
