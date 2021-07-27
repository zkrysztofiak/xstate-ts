import React from 'react';
import { Button, Spinner, CloseButton } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMachine } from '@xstate/react';
import { zapoNaPlatnoscMachine } from './zapoNaPlatnoscMachine';

function ZapoNaPlatnosc() {
	const [current, send] = useMachine(zapoNaPlatnoscMachine);
	return (
		<table className='containerZnP'>
			<thead>
				<tr>
					<th colSpan={5}>{current.matches('pobieranieWoP') && <Spinner animation='border' aria-hidden='true' />}</th>
					<th colSpan={5}>{current.value}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>00fr</td>
					<td>01fr</td>
					<td>02fr</td>
					<td>03fr</td>
					<td>04fr</td>
					<td>
						<Button variant='primary' disabled={!current.matches('przeslanoDaneUtylizacjiWoP')} onClick={() => send('AKTUALNY_MONTAZ_FIN')}>
							AKTUALNY_MONTAZ_FIN
						</Button>
					</td>
					<td>06fr</td>
					<td>07fr</td>
					<td>08fr</td>
					<td>09fr</td>
				</tr>
				<tr>
					<td>
						<Button variant='primary' disabled={!current.matches('idle')} onClick={() => send('POBIERZ_ZWoP')}>
							POBIERZ_ZWoP
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('pobranoDaneWoP')} onClick={() => send('TESTUJ_POKRYCIE100PR')}>
							TESTUJ_POKRYCIE100PR
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('testPokrycia100procent')} onClick={() => send('TAK100PR')}>
							TAK100PR
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('akceptacjaKierDWB')} onClick={() => send('AKCEPT_KIER_DWB')}>
							AKCEPT_KIER_DWB
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('przekazanieZnP2BFK')} onClick={() => send('PRZEKAZ2BFK')}>
							PRZEKAZ2BFK
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('przesylanieDanychUtylizacjiWoP')} onClick={() => send('PRZESLIJ_UTYL_WoP')}>
							PRZESLIJ_UTYL_WoP
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('przeslanoDaneUtylizacjiWoP')} onClick={() => send('TESTUJ_WYK100PR')}>
							TESTUJ_WYK100PR
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('testWyk100procent')} onClick={() => send('TAK_WYK100PR')}>
							TAK_WYK100PR
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('koniec')} onClick={() => send('TAK_WYK100PR')}>
							KONEC
						</Button>
					</td>
				</tr>
				<tr>
					<td>20fr</td>
					<td>21fr</td>
					<td>
						<Button variant='primary' disabled={!current.matches('testPokrycia100procent')} onClick={() => send('PONIZEJ100PR')}>
							PONIZEJ100PR
						</Button>
					</td>
					<td>
						<Button variant='primary' disabled={!current.matches('pomniejszanieKwotyWoP')} onClick={() => send('DONE_POMNIEJSZONO')}>
							DONE_POMNIEJSZONO
						</Button>
					</td>
					<td>24fr</td>
					<td>25fr</td>
					<td>26fr</td>
					<td>
						<Button variant='primary' disabled={!current.matches('testWyk100procent')} onClick={() => send('PONIZEJ_WYK100PR')}>
							PONIZEJ_WYK100PR
						</Button>
					</td>
					<td>28fr</td>
					<td>29fr</td>
				</tr>
			</tbody>
		</table>
	);
}

export default ZapoNaPlatnosc;
