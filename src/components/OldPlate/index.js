import React from 'react'
import './styles.css'

import Screw from '../../assets/images/screw.png'
import Lock from '../../assets/images/lock.png'

const Plate = ({ plate }) => {
    if (!plate) {
        if (plate === null) return <div id="plate-warning"><p>Sua placa é nova e não existia na época do padrão antigo! Tente outra <span role="img" aria-label="wink">😉</span></p></div>
        return null
    } else {
        return (
            <div id="result">
                <h1>Sua placa antiga era:</h1>
                <div id="old-plate">
                    <div id="wrapper-old-plate">
                        <p id="code">046PR2010</p>
                        <div id="locale">
                            <img src={Lock} alt="lock" id="lock" />
                            <img src={Screw} alt="screw" />
                            <p id="city">UF - Cidade</p>
                            <img src={Screw} alt="screw" />
                        </div>
                        <div id="old-number">
                            <div><span>{plate.substr(0, 3)}</span><span>{plate.substr(3, 1)}</span><span>{plate.substr(4)}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plate