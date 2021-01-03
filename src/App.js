import React, { useEffect, useState } from 'react'
import Plate from './components/Plate'

import './styles.css'

export default function App() {
	const [plate, setPlate] = useState('')
	const [newPlate, setNewPlate] = useState('')
	const [isPlateIncorrect, togglePlateIncorrect] = useState(false)

	const convert = () => {
		const plateRegex = /^[A-Z]{3}-[0-9]{4}$/g
		if (!plateRegex.test(plate)) {
			togglePlateIncorrect(true)
			return
		}
		let _plate = plate.replace('-', '')
		_plate = _plate.split('')
		switch (_plate[4]) {
			case '0':
				_plate[4] = 'A'
				break
			case '1':
				_plate[4] = 'B'
				break
			case '2':
				_plate[4] = 'C'
				break
			case '3':
				_plate[4] = 'D'
				break
			case '4':
				_plate[4] = 'E'
				break
			case '5':
				_plate[4] = 'F'
				break
			case '6':
				_plate[4] = 'G'
				break
			case '7':
				_plate[4] = 'H'
				break
			case '8':
				_plate[4] = 'I'
				break
			case '9':
				_plate[4] = 'J'
				break
			default:
				break
		}
		_plate = _plate.join('')
		setNewPlate(_plate)
	}

	const fixPlate = (inputPlate) => {
		let _plate = inputPlate.toUpperCase()
		const initialRegex = /^[A-Z]{0,3}$/gi
		const plateRegex = /^[A-Z]{3}-[0-9]{0,4}$/g
		if (initialRegex.test(_plate)) {
			if (plate.includes('-')) return setPlate(_plate)
			return _plate.length === 3 ? setPlate(`${_plate}-`) : setPlate(_plate)
		}
		if (!_plate.includes('-') && _plate.length === 4) {
			_plate = _plate.split('')
			_plate.splice(3, 0, '-')
			_plate = _plate.join('')
		}
		if (plateRegex.test(_plate)) {
			return setPlate(_plate)
		}
		return
	}

	useEffect(() => {
		togglePlateIncorrect(false)
	}, [plate])

	return (
		<div className='App'>
			<div id='app-wrapper'>
				<div>
					<p>Digite aqui a sua placa no padrão anterior:</p>
					<div id='converter'>
						<div id="input-area">
							<input value={plate} onInput={(e) => fixPlate(e.target.value)} className={`input-field${isPlateIncorrect ? ' plate-error' : ''}`} />
							{isPlateIncorrect && <span id="incorrect">Placa inválida</span>}
						</div>
						<button onClick={convert}>Converter</button>
					</div>
				</div>
				{newPlate && <Plate plate={newPlate} />}
			</div>
		</div>
	)
}
