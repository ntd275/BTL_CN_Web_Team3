import React from 'react';
import Navbar from "./component/Navbar"
import Homepage from "./component/Homepage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/navbar.css";
import Contact from './component/Contact';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  Switch
  // etc.
} from "react-router-dom"
import Categories from './component/Categories';
import News from './component/News';
import Partners from './component/Partners';
import Search from './component/Search';
import Article from './component/Article';
import Event from './component/Event';
import Adminlogin from './component/Adminlogin';
import Calendarpage from './component/Calendarpage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch >
          <Route path="/" exact component={Homepage} />
          <Route path="/calendar" exact component={Calendarpage} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/news" exact component={News} />
          <Route path="/partners" exact component={Partners} />
          <Route path="/contact" component={Contact} />
          <Route path="/find" exact component={Search} />
          <Route path="/news/123" exact component={Article} />
          <Route path="/categories/123" exact component={Event} />
          <Route path="/admin" exact component={Adminlogin} />
        </Switch >
        <Footer />

      </div>
    </Router>
  );
}
export default App;
