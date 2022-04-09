import React from 'react-dom';
import {
  Header,Patient,Doctor,Files,Notes, Appointments, NavBar
} from "./contents/index"

import Subling from "./components/subLinks/subling"

import './App.css';

function App() {

  const notes = {
    gridColoumn: "2",
    gridRow: '1'
  }
  const patient = {
    gridColoum: "1",
    gridRow: '1'
  }
  const appointment = {
    gridColoum: '1',
    gridRow: '2'
  }
  const file = {
    gridColoum: '2',
    gridRow: '2'
  }
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

            <Patient styles={patient} />
            <Notes styles = {notes}/>
            
            <Appointments styles ={appointment}/>
            <Files styles = {file}/>
          </div>
          </div>
         </div>
    </div>
  );
}

export default App;
