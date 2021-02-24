import './style/main.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
// import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact />
        <Route path="/users" exact />
        <Route path="/users:id" exact />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
