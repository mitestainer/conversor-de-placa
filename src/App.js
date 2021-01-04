import React, { useState, useEffect } from 'react';
import ModeButton from './components/ModeButton';
import NewPlate from './components/NewPlate'
import OldPlate from './components/OldPlate'

import './styles.css'

export default function App() {
	const [inputPlate, setInputPlate] = useState('')
	const [displayPlate, setDisplayPlate] = useState('')
	const [isPreviousPatterOn, togglePreviousPattern] = useState(false)
	const [isPlateIncorrect, togglePlateIncorrect] = useState(false)

	const convert = () => {
		const plateRegex = /^[A-Z]{3}-[0-9]{4}$/g
		if (!plateRegex.test(inputPlate)) {
			togglePlateIncorrect(true)
			return
		}
		let _plate = inputPlate.replace('-', '')
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
		_plate = _plate.join('');
		setDisplayPlate(_plate)
	}

	const convertBack = () => {
		const plateRegex = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/g
		if (!plateRegex.test(inputPlate)) {
			togglePlateIncorrect(true)
			return
		}
		let _plate = inputPlate.split('');
		switch (_plate[4]) {
			case 'A':
				_plate[4] = '0';
				break;
			case 'B':
				_plate[4] = '1';
				break;
			case 'C':
				_plate[4] = '2';
				break;
			case 'D':
				_plate[4] = '3';
				break;
			case 'E':
				_plate[4] = '4';
				break;
			case 'F':
				_plate[4] = '5';
				break;
			case 'G':
				_plate[4] = '6';
				break;
			case 'H':
				_plate[4] = '7';
				break;
			case 'I':
				_plate[4] = '8';
				break;
			case 'J':
				_plate[4] = '9';
				break;
			default:
				_plate = ''
				break;
		}
		if (!_plate) return setDisplayPlate(null)
		_plate.splice(3, 0, '-')
		_plate = _plate.join('');
		setDisplayPlate(_plate)
	}

	const fixPlate = (plate) => {
		let _plate = plate.toUpperCase()
		const initialRegex = /^[A-Z]{0,3}$/gi
		const plateRegex = isPreviousPatterOn ? /^[A-Z]{0,3}$|^[A-Z]{0,3}[0-9]$|^[A-Z]{0,3}[0-9][A-Z]$|^[A-Z]{0,3}[0-9][A-Z][0-9]{0,2}$/g : /^[A-Z]{3}-[0-9]{0,4}$/g;
		if (!isPreviousPatterOn) {
			if (initialRegex.test(_plate)) {
				if (inputPlate.includes('-')) return setInputPlate(_plate)
				return _plate.length === 3 ? setInputPlate(`${_plate}-`) : setInputPlate(_plate)
			}
			if (!_plate.includes('-') && _plate.length === 4) {
				_plate = _plate.split('')
				_plate.splice(3, 0, '-')
				_plate = _plate.join('')
			}
		}
		if (plateRegex.test(_plate)) {
			return setInputPlate(_plate)
		}
		return
	}

	useEffect(() => {
		togglePlateIncorrect(false)
	}, [inputPlate])

	useEffect(() => {
		setInputPlate('')
		setDisplayPlate('')
	}, [isPreviousPatterOn])

	return (
		<div className='App'>
			<ModeButton onChange={() => togglePreviousPattern(!isPreviousPatterOn)} checked={isPreviousPatterOn} />
			<div id='app-wrapper'>
				<div>
					<p>Digite aqui a sua placa no padrão {!isPreviousPatterOn ? 'anterior' : 'atual'}:</p>
					<div id='converter'>
						<div id="input-area">
							<input value={inputPlate} onInput={(e) => fixPlate(e.target.value)} className={`input-field${isPlateIncorrect ? ' plate-error' : ''}`} />
							{isPlateIncorrect && <span id="incorrect">Placa inválida</span>}
						</div>
						<button onClick={isPreviousPatterOn ? convertBack : convert}>Converter</button>
					</div>
				</div>
				{isPreviousPatterOn ? <OldPlate plate={displayPlate} /> : <NewPlate plate={displayPlate} />}
			</div>
		</div>
	)
}
