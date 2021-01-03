import React from 'react'
import './styles.css'

const ModeButton = ({ onChange, checked }) => {
    return (
        <div id="mode-button" onClick={onChange}>
            <p>Trocar modo:</p>
            <div id="ball-area">
                <div id="ball" className={checked ? 'on' : 'off'}></div>
            </div>
        </div>
    )
}

export default ModeButton