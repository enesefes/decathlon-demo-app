import logo from "./logo.svg";
import "./App.css";


import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  BrowserRouter,
} from "react-router-dom";

import UserList from "./components/Usersnew";
import Notfound from "./Pages/Notfound";
import Profile from "./Pages/Profile";
import Postlistnew from "./components/Postlistnew";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



const UserPage = () => {
  return <h3>User Page</h3>;
};

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div className="App">
          <Header />
        </div>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Postlistnew} />
          <Route path="/users" component={UserList} />
          <Route path="/profile/:id" component={Profile} />
          <Route component={Notfound} />
        </Switch>
        <Footer/>
      </Router>
    </BrowserRouter>
  );
}

export default App;
