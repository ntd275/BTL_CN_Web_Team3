import React from 'react';
import Navbar from "./component/Navbar"
import BigContet from "./component/BigContent"
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbar/>
      <BigContet/>
      <Footer />
    </div>
  );
}

export default App;
