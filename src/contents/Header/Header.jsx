import React, {useState, useEffect} from 'react'
import {BsPerson} from "react-icons/bs"
import {
    AiTwotoneBell,
    AiOutlinePlus,
    AiOutlineSearch,
    AiFillPrinter
} from "react-icons/ai";
import { FaAngleRight} from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

import './Header.css'
function Header() {
    const [name, setName] = useState([]);
    // Api to get name of patient
    const API = ` https://619f39821ac52a0017ba467e.mockapi.io/patientDetails`
    useEffect(() => {
        fetch(API).then(res => res.json()).then(data => setName([data[0]]))
    })
    return ( 
        <div className="App_header">
            <div className = "App_header-upper flex" >
                <div className = "App_header-patient display_flex" >
                    <BsPerson style = { {color: "#1d4ed8", fontSize: "1.5em", marginRight: ".5em" }}/>
                    {
                        name.map(name => {
                            return <h2 key={name.id} className="patient_name"> { name.name} </h2>
                        })
                    }
                </div>
                <div className="App_header-right display_flex">
                    <div className="App_search">
                        <AiOutlineSearch />
                        <input
                            
                            type="text"
                            name = "text"
                            id="text"
                            placeholder='search'
                        />
                    </div>
                    <div className="App_header-plus">
                        <AiOutlinePlus style={{
                            color: "#f8fafc", 
                            cursor:"pointer"
                        }}
                        />
                    </div>

                    <div className="App_header-notification">
                        <AiTwotoneBell style={{fontSize: "1.4em"}}/>
                        <div> </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="App_header-lower flex">
                < div className = "App_header-lower_left display_flex" >
                    <p>Patient List</p>
                    <FaAngleRight style = {
                        {
                            margin: "1em",
                            color: "#cbd5e1"
                        }
                    }
                    />
                      {
                        name.map(name => {return <p> {name.name}</p>})
                      }
                </div>

                <div className = "display_flex App_header-lower_right flex" >
                    <div className="App_header-lower_print">
                        <AiFillPrinter />
                    </div>

                    <div className = "App_header-lower_edit display_flex" >
                        <BiEdit />
                        <p>Edit Patient</p>
                    </div>
                </div>
                
            </div>

            <hr />
        </div>
    )
}
export default Header