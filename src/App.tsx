import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='container'>
			<div className='grid2cols'>
				<div className='grid-item-right'>1fr</div>
				<div className='grid-item-center '>1fr</div>
			</div>

			<div className='grid8cols'>
				<div className='grid-item-center'>
					<Button variant='primary'>Guziczek</Button>
				</div>
				<div className='grid-item-center '>
					<div className='grid-item-center'>
						<Button variant='success'>Guziczek</Button>
					</div>
				</div>
				<div className='grid-item-right'>
					<div className='grid-item-center'>
						<Button variant='warning'>Guziczek</Button>
					</div>
				</div>
				<div className='grid-item-center '>1fr</div>
				<div className='grid-item-right'>1fr</div>
				<div className='grid-item-center '>1fr</div>
				<div className='grid-item-right'>1fr</div>
				<div className='grid-item-center '>1fr</div>
			</div>

			<div className='grid8cols'>
				<div className='grid-item-right'>1fr</div>
				<div className='grid-item-center '>1fr</div>
				<div className='grid-item-right'>1fr</div>
				<div className='grid-item-center '>1fr</div>
				<div className='grid-item-right'>1fr</div>
				<div className='grid-item-center '>1fr</div>
				<div className='grid-item-right'>1fr</div>
				<div className='grid-item-center '>1fr</div>
			</div>

			<Button type='primary'>Guziczek</Button>
		</div>
	);
}

export default App;
