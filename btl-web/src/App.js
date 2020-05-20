import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/navbar.css";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./component/Categories";
import News from "./component/News";
import Partners from "./component/Partners";
import Search from "./component/Search";
import Article from "./component/New";
import Event from "./component/Event";
import Adminlogin from "./component/Adminlogin";
import Calendarpage from "./component/Calendarpage";
import Events from "./component/Events";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/calendar" exact component={Calendarpage} />
            <Route path="/categories" exact component={Categories} />

            <Route path="/eventspage/:id" exact component={Events} />
            <Route path="/eventscat/:category/:id" exact component={Events} />

            <Route path="/events/:id" exact component={Event} />

            <Route path="/newspage/:id" exact component={News} />
            <Route path="/news/:id" exact component={Article} />

            <Route path="/partners" exact component={Partners} />
            <Route path="/contact" component={Contact} />

            <Route path="/find" exact component={Search} />

            <Route path="/admin" exact component={Adminlogin} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
