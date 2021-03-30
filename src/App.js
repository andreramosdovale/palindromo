import './App.css';
import { useState } from 'react';
import Condicional from './components/Condicional'
import { Button } from 'react-bootstrap'

function App() {
	const [palavra, setPalavra] = useState(); 
	const [palindromo, setPalindromo] = useState()
	
	async function handlerSubmit(event) {
		event.preventDefault();
		
		const status = await isPalindromo(palavra)

		return await setPalindromo(status);
	}

	function isPalindromo(palavra){  
		let reversed = [...palavra].reverse().join("")
  		return palavra === reversed
	}

	return (
		<div className="App">
			<div className="App-content">
				<div className="container">
					<h1 className="margin-control">Verficador de Palíndromo</h1>
					<form onSubmit={handlerSubmit} className="margin-control">
						<input 
						className="input-control"
						placeholder="digite uma palavra" 
						type="text" 
						name="palavra"
						value={palavra}
						onChange={(event) => setPalavra(event.target.value)}>
						</input>
						<Button variant="outline-primary" type="submit">Validar</Button>
					</form>
					<Condicional status={palindromo} palavra={palavra} />
				</div>
			</div>
		</div>
	);
}

export default App;
