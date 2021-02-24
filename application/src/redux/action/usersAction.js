import { createAction } from "@reduxjs/toolkit";

const axiosUserRequest = createAction("users/axiosUsersRequest");
const axiosUserSuccess = createAction("users/axiosUsersSuccess");
const axiosUserError = createAction("users/axiosUsersError");

export default { axiosUserRequest, axiosUserSuccess, axiosUserError };
