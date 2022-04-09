import React from 'react';
import Sublink from '../../components/subLinks/subling';
import './navBar.css'

import {
    FaBriefcaseMedical, FaBars
} from 'react-icons/fa'

import {
    AiOutlineQuestionCircle, AiOutlineSetting
} from 'react-icons/ai'

import {
    BsCalendar, BsPerson
} from 'react-icons/bs'

import {
    BiDollarCircle, BiMessageDots
} from 'react-icons/bi'

import SingleFile from '../../components/subLinks/singleFile/singleFile'
export default function NavBar() {
    const style = {
        padding: "1em 0"
    }
    return (
        <div className="App_Nav">
            {/* Header on the nav bar with logo and Button for expanding and contacting the navbar */}
            <div className="App_navbar-header">
                    <SingleFile
                        icon={<FaBriefcaseMedical style={{ fontSize: "1.5em", color: "blue" }} />}
                        name = "Zendenta"
                        desc = "Truth about your life"
                    />
                <Sublink
                    icon={<FaBars  style={{cursor:"pointer"}} />}
                />
            </div>

            <div className="App_Navbar-links">
                {/* single nav link */}
                <div className="nav_link">
                    <Sublink
                        style={style}
                        text="Overview"
                        icon={<AiOutlineQuestionCircle />}
                    />
                </div>
                {/* single nav link */}
                <div className="nav_link">
                    <Sublink
                        text="Message"
                        style={style}
                        icon={<BiMessageDots />}
                    />
                </div>
                {/* single nav link */}
                <div className="nav_link">
                    <Sublink
                        text="Payement"
                        style={style}
                        icon={<BiDollarCircle />}
                    />
                </div>
                {  /* Single link */ }
                 <div className = "nav_link" >
                    <Sublink
                        text="Patient List"
                        style={style}
                        icon={<BsPerson />}
                    />
                </div>
                { /* Single link */ }
                <div className="nav_link">
                    <Sublink
                        text="Calender"
                        style={style}
                        icon={<BsCalendar />}
                    />
                </div>
                {/* Single link */}
                <div className="nav_link">
                    <Sublink
                        text="Settings"
                        style={style}
                        icon={<AiOutlineSetting />}
                    />     
                </div>
            </div>
        </div>
    )
}