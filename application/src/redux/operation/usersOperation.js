import axios from 'axios';
import usersAction from '../action/usersAction';

const SERVER_URI = `http://localhost:1717/api/users`;

const getAllUsersFromServer = () => (dispatch) => {
  const pageNumber = 1;

  dispatch(usersAction.axiosAllUsersRequest());

  axios
    .post(SERVER_URI + `?page=${pageNumber}`)
    .then((res) => {
      return dispatch(usersAction.axiosAllUsersSuccess(res.data.usersData));
    })
    .catch((error) => dispatch(usersAction.axiosAllUsersError(error)));
};

const getUserInfoClickAndView = ({ idUser }) => (dispatch) => {
  console.log(idUser);
  const idUser = 1;
  dispatch(usersAction.axiosUserRequest());

  axios
    .post(SERVER_URI + `?id_user=${idUser}`)
    .then((res) => {
      return dispatch(usersAction.axiosUserSuccess(res.data));
    })
    .catch((error) => dispatch(usersAction.axiosUserError(error)));
};
export default {
  getAllUsersFromServer,
  getUserInfoClickAndView,
};
