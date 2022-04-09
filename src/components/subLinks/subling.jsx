import React from "react"
import "./subling.css"
export default function Sublink({icon, text, style, subicon}) {
    return (
        <div className="App_links" style={style}>
            {icon}
            <p>{text}</p>
            {subicon}
        </div>
    )
}