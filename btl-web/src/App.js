import React from 'react';
import Navbar from "./component/Navbar"
import Homepage from "./component/Homepage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/navbar.css";
import Contact from './component/Contact';
import Nothing from "./component/Nothing"
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  Switch
  // etc.
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch >
          <Route path="/" exact component={Homepage} />
          <Route path="/calendar" exact component={Nothing} />
          <Route path="/categories" exact component={Nothing} />
          <Route path="/news" exact component={Nothing} />
          <Route path="/partner" exact component={Nothing} />
          <Route path="/contact" component={Contact} />
          <Route path="/find" exact component={Nothing} />
        </Switch >
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
