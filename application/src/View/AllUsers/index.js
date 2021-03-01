import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ListUser from '../../components/ListUser';
const AllUsers = ({ users }) => {
  const [state, setState] = useState();
  useEffect(() => {
    setState(users);
  });
  return (
    <section className="container">
      <div className="users-container">
        <div className="users-container__navigation">
          {' '}
          <NavLink to="/"> Menu </NavLink>
          <NavLink to="/users"> Users</NavLink>{' '}
        </div>
        <div className="users-container__atribute"></div>
        <div className="users-container__list">
          {state && <ListUser data={state} />}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps, null)(AllUsers);
