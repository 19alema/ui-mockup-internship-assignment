import React from 'react'

import './subSmallBox.css'

function SubSmallBox({
    title,
    result, style
}) {
    return (
        <div className="suv_small_box">
            <h4>{title}</h4>
            <p>{ result}</p>
        </div>
    )
}
export default SubSmallBox