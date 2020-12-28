import React from 'react'


import "./ToggleButton.css";

function ToggleButton({state,setState}) {
    const handlerToggleModal = () =>{
        setState(!state)
    }
    return (
        <div className="toggle-btn" onClick={handlerToggleModal}>
            <div className="container">
                <a  href="/#">Button</a>
            </div>
        </div>
    )
}

export default ToggleButton
