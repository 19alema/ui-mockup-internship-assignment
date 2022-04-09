import React from 'react'

import './subInfo.css'
function SubInfo({title,result, style}) {
     return (
         <div className="sub_info_box">
             <h3>{title}</h3>
             <p>{ result}</p>
         </div>
    )
}
export default SubInfo