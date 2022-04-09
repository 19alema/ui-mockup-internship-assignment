import React from 'react'
import "./notes.css"
import SubLink from "../../components/subLinks/subling";
import {
    BsPerson
} from "react-icons/bs";


function Notes({styles}) {
    const style = {
        color: "blue",
        cursor: "pointer"
    }
    return ( 
    <div className="App_notes">
            <div className="App_notes-header">
                <h3>Notes</h3>
                <SubLink style={style} text="See all"/>
            </div>

            <div className="App_notes-info">
                <div className="notes">
                    <ul>
                        <li>This patient is Lorem, ipsum.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                    <div>
                        <button className="notes_btn">
                            save notes
                        </button>
                        </div>
                </div>
            </div>

            <div className="notes_footer">
                <SubLink text="Drg. Mega Nanade" icon={<BsPerson style={{ color: "blue" }} />} />
                <p>20 Nov '19</p>
            </div>
    </div>
    )
}
export default Notes