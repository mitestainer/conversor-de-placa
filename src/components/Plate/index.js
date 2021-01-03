import React from 'react'
import './styles.css'

import MercosulLogo from '../../assets/images/mercosul-logo.png'
import Flag from '../../assets/images/flag.png'
import QRCode from '../../assets/images/QRCode.png'

const Plate = ({ plate, isPrevious }) => {
    // const plateTest = /^$/.test(plate)
    if (!plate) {
        if (isPrevious && plate === null) {
            return <div id="new-plate"><p>Sua placa é nova e não existia na época do padrão antigo! Tente outra 😉</p></div>
        } else {
            return null
        }
    } else {
        return (
            <div id="result">
                <h1>Sua {isPrevious ? 'placa antiga era' : 'nova placa será'}:</h1>
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
                            <div><span>{plate.substr(0, 3)}</span><span>{plate.substr(3)}</span></div>
                            <img src={QRCode} alt="Fake QRCode" />
                            <span id="br-tag">BR</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plate