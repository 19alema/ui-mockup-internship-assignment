import React from 'react-dom';
import {
  Header,Patient,Doctor,Files,Notes, Appointments, NavBar
} from "./contents/index"

import Subling from "./components/subLinks/subling"

import './App.css';

function App() {

  return (
    <div className="App">
        <div className="App_container">
            <div className="App_navbar">
              <NavBar />
              <Doctor />
            </div>
        <div className="App_content">
          <Header />
          <div className="App_info-content">

            <Patient />
            <Notes />
            
            <Appointments/>
            <Files />
          </div>
          </div>
         </div>
    </div>
  );
}

export default App;
