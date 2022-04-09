import React from 'react';

import './singleFile.css'

export default function SingleFile({icon, name, desc, image}) {
    return (
    <div className="App_single_file">
            <div className="col-right">
                {icon}
                {
                    image && <img src={image} alt={name} />
                }
            </div> 
            <div className="col-left">
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>  
    </div>
    )
}