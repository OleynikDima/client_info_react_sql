import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Example from '../../components/LineDiagram';
import usersOperation from '../../redux/operation/usersOperation';

const UserInfoID = ({ idUser, users, getUserInfoClickAndView }) => {
  const [userInfoFromId, setUserInfoFromId] = useState();

  useEffect(() => {
    const getInfoUserById = users.filter((user) => user.id === Number(idUser));
    setUserInfoFromId(getInfoUserById);
    getUserInfoClickAndView(getInfoUserById);
  }, []);

  return (
    <>
      {' '}
      {userInfoFromId ? (
        <div>
          <Example user={userInfoFromId[0]} />
        </div>
      ) : null}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUserInfoClickAndView: () =>
    dispatch(usersOperation.getUserInfoClickAndView()),
});

export default connect(null, mapDispatchToProps)(UserInfoID);
