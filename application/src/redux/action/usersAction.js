import { createAction } from '@reduxjs/toolkit';

const axiosUserRequest = createAction('user/axiosUsersRequest');
const axiosUserSuccess = createAction('user/axiosUsersSuccess');
const axiosUserError = createAction('user/axiosUsersError');

const axiosAllUsersRequest = createAction('users/axiosAllUsersRequest');
const axiosAllUsersSuccess = createAction('users/axiosAllUsersSuccess');
const axiosAllUsersError = createAction('users/axiosAllUsersError');

export default {
  axiosUserRequest,
  axiosUserSuccess,
  axiosUserError,
  axiosAllUsersRequest,
  axiosAllUsersSuccess,
  axiosAllUsersError,
};
