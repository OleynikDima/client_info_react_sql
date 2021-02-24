import './style/main.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './View/Home';
// import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact />
        <Route path="/users:id" exact />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
