import React from 'react'
import './styles.css'

import MercosulLogo from '../../assets/images/mercosul-logo.png'
import Flag from '../../assets/images/flag.png'
import QRCode from '../../assets/images/QRCode.png'

const Plate = ({ plate }) => {
    return (
        <div id="result">
            <h1>Sua nova placa será:</h1>
            <div id="plate">
                <div id="wrapper">
                    <div id="upper">
                        <img src={MercosulLogo} alt="Mercosur logo" />
                        <p>Brasil</p>
                        <div id="flag-wrapper">
                            <img src={Flag} alt="Flag of Brazil" />
                        </div>
                    </div>
                    <div id="number">
                        <p><span>{plate.substr(0, 3)}</span><span>{plate.substr(3)}</span></p>
                        <img src={QRCode} alt="Fake QRCode" />
                        <span id="br-tag">BR</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plate