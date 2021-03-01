import React from 'react';
import { NavLink } from 'react-router-dom';
import './itemUser.scss';
import { connect } from 'react-redux';
const ListUser = ({ data }) => {
  return (
    <ul>
      {data
        ? data.map((user, ind) => {
            const {
              id,
              first_name,
              last_name,
              email,
              gender,
              ip_address,
              page_views,
              clicks,
            } = user;

            return (
              <NavLink
                key={id}
                className="users-container__item"
                to={{ pathname: `user/${id}` }}
              >
                <div className="users-container__item-id text-center">{id}</div>

                <div className="users-container__item-first_name text-center">
                  {first_name}
                </div>

                <div className="users-container__item-last_name text-center">
                  {' '}
                  {last_name}
                </div>

                <div className="users-container__item-email text-center">
                  {email}
                </div>

                <div className="users-container__item-genred text-center">
                  {gender}
                </div>

                <div className="users-container__item-ip_addres text-center">
                  {ip_address}
                </div>

                <div className="users-container__item-total_click text-center">
                  {clicks}
                </div>
                <div className="users-container__item-total_view text-center">
                  {page_views}
                </div>
              </NavLink>
            );
          })
        : null}
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    idUser: ownProps.match.params.id,
    users: state.users.users,
  };
};
export default connect(mapStateToProps, null)(ListUser);
