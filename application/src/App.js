import './style/main.scss';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//view
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './View/Home';
import AllUsers from './View/AllUsers';
import UserInfoId from './View/InfoUser';
import usersOperation from './redux/operation/usersOperation';
import { useEffect } from 'react';
const App = ({ getAllUsers }) => {
  useEffect(() => {
    getAllUsers();
  });
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={AllUsers} />
        <Route path="/user/:id" exact component={UserInfoId} />
      </Switch>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(usersOperation.getAllUsersFromServer()),
});
export default connect(null, mapDispatchToProps)(App);
