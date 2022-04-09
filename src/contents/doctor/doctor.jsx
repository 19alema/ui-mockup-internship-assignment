import React, {useState, useEffect} from 'react'
import './doctor.css'
import SingleFile from '../../components/subLinks/singleFile/singleFile';
import Sublink from '../../components/subLinks/subling';
import {
  FaAngleDown
} from 'react-icons/fa';

import {
   FiHelpCircle
} from 'react-icons/fi'
function Doctor() {
    const [person, setPerson] = useState([]);

  const url = ` https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails`
    useEffect(() => {
        fetch(url).then(res => res.json())
        .then(person => setPerson(person[0]))
    })
    return ( 
        <div className="App_doctor">
            <div className="App_doctor-help">
                <Sublink text="Help ?" icon ={<FiHelpCircle />} />
            </div>
             <hr />
            <div className="App_doctor-profile"> 
                <SingleFile image = "https://reqres.in/img/faces/7-image.jpg" name = {  person.name}desc = { person.specification} />
                <FaAngleDown style={{ cursor: "pointer" }}/> 
                
            </div>
        </div>
    )
}
export default Doctor