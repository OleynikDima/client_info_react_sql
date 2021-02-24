import axios from 'axios';
import usersAction from '../action/usersAction';

const SERVER_URI = `http://localhost:1717/api/users`;

const getAllUsersFromServer = () => (dispatch, getStates) => {
  dispatch(usersAction.axiosUserRequest());
  axios
    .get(SERVER_URI)
    .then((res) => {
      console.log(res);
      return dispatch(usersAction.axiosUserSuccess(res.data));
    })
    .catch((error) => dispatch(usersAction.axiosUserError(error)));
};
export default {
  getAllUsersFromServer,
};
