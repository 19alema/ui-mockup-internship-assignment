import React, { useEffect, useState} from 'react'
import "./patient.css"

import SubInfo from '../../components/subLinks/subInfo/subInfo'
function Patient() {
    const [patient, setPatient] = useState([])
    const [loading, setLoading] = useState(true)
    const style = {
        
    }
    // Patient Api endpoint link
    const API = ` https://619f39821ac52a0017ba467e.mockapi.io/patientDetails`
    
    useEffect(() => {
        fetch(API).then(res => res.json())
            .then(data => {
                setPatient([data[0]])
                setLoading(false)
            })
            
    })
    return (
        <div className="App_patient">
            <div className="App_patient-profile">
                {
                    // To Generate Patients Profile Information

                patient.map(patient => {
                    const { name, Upcoming, email, Past} = patient;
                    return (
                        <div className="profile">
                            <div className="App_patient-profile_header">
                                <div className="profile-image">
                                    {/* Image src not from Api because the api had no image */}
                                    <img src = "https://reqres.in/img/faces/12-image.jpg"  alt = {  name }/>
                                </div>
                                <div className="App_patient-profile_info">
                                    <h2>{name}</h2>
                                    <p>{email }</p>
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="box">
                                    <p>{Past}</p>
                                    <span>Post</span>
                                </div>
                                <div className="hr_line"></div>
                                <div className="box">
                                    <p>{Upcoming}</p>
                                    <span>Upcoming</span>
                                </div>
                            </div>
                            <button>send message</button>
                       </div>
                   )
                 })
               }
            </div>

            {/* Allowing the users to know that some infromation is loading as he or she waits */}
            {
                loading && <> < p > loading profile... </p></>
            }
            {
                patient.map(patient => {
                 
                  const{Gender,Birthday} = patient
                    return (
                    // Detail Patients Information
                        
            <div className="App_patient-info">
                <div className="App_patient-info_detail">
                    <SubInfo style={style} title="Gender" result={Gender} />
                    <SubInfo style={style} title = "Street Address" result = {patient["Street Address"]}/>
                    <SubInfo style={style} title = "Member Status" result = { patient["Member Status"]}/>
                </div>
                        
                <div className="App_patient-info_detail">
                    <SubInfo style={style} title="Birthday" result={Birthday} />
                    <SubInfo style={style} title = "City" result = { Gender}/>
                    <SubInfo title  = "Registered Date" style={style} result = {patient["Register Date"] }/>      
                </div>
                <div className="App_patient-info_detail">
                    <SubInfo title = "Phone Number" result = {  patient["Phone Number"]}/>
                    <SubInfo title = "Zip Code" result = { patient["ZIP Code"]}/>
                </div>
            </div>
                     )
                })
            }
        </div>
    )
}
export default Patient