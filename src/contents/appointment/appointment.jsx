import React, {useState, useEffect} from 'react'
import SubSmallBox from '../../components/subLinks/subSmallBox/subSmallBox'
import SubLink from '../../components/subLinks/subling';
import {
    CgNotes
} from 'react-icons/cg';
import {FaAngleUp} from 'react-icons/fa';
import "./appointment.css"
import { buildQueries } from '@testing-library/react';
function Appointments({grid }) {
    const [appointment, setAppointment] = useState([])
   
    const APPOINTMENT_API = `https://619f39821ac52a0017ba467e.mockapi.io/appointment_details`;
    const style = {
        color: "blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "15px"
    }

   
    const getAppointment = async () => {
        fetch(APPOINTMENT_API).then(res => res.json()
            .then(data => {
                setAppointment([data[0]])
            }))
    }

    useEffect(() => {
        getAppointment()
    },[])
    return ( 
        <div className="App_appointment">
             <div className="App_appointment-container">
            <div className="appointment_tab">
                <div className="tab">
                    <p className="tab_para">
                        Upcoming Appointment
                    </p>
                </div>
                <div className="tab">
                    <p className="tab_para">
                        Past Appointment
                    </p>
                </div>
                <div className="tab">
                    <p className="tab_para" >
                      Medical Records
                    </p>
                </div>
            </div>
            
            {
                appointment.map(appointment => {
                    const {
                        Time,
                        Date,
                        Treatment,
                        Dentist,
                        Nurse
                    } = appointment["Post Appointment"];
            
                
                 return (
                        
                <div className="App_appointment_bar">
                    <div className="App_appointment_bar-header">
                        <h4>Root Canal Treatment</h4>
                        <div className="header-right">
                            <FaAngleUp />
                            <p>Show previous Treatment</p>
                        </div>        
                    </div>
                         <hr />  
               
                    {/* UPPER UPCOMING APPOINTMENT BAR */}
                    <div className="App_appointment_bar-upper">
                        <SubSmallBox
                            title={Date}
                            result={Time}
                        />
                        <SubSmallBox
                            title="Treatment"
                            result={Treatment}
                        /> 
                        <SubSmallBox
                            title="Dentist"
                            result={Dentist}
                        />
                        <SubSmallBox
                            title="Nurse"
                            result={Nurse}
                         /> 
                        <SubLink
                            style={style}
                            text="Notes"
                            icon={<CgNotes />}
                        />
                         </div>
                    {/* LOWER UPCOMING APPOINTMENT BAR */}
                    <div className="App_appointment_bar-lower">
                            <SubSmallBox
                                title={Date}
                                result={Time}
                            />
                            <SubSmallBox
                                title="Treatment"
                                result={Treatment}
                            />
                            <SubSmallBox
                                title="Dentist"
                                result={Dentist}
                            />
                            <SubSmallBox
                                title="Nurse"
                                result={Nurse}
                            /> 
                             <div>
                                 
                        {/* SMALL NOTES TEXT WITH ICON */}
                            <SubLink
                                style={style}
                                text="Notes"
                                icon={<CgNotes />}
                            />    
                        </div>  
                    </div>
            </div>
                    )
                })
            }
</div>
        </div>
    )
}
export default Appointments