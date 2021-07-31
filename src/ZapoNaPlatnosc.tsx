import React from 'react';
import { Button, Spin } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { useMachine } from '@xstate/react';
import { zapoNaPlatnoscMachine } from './zapoNaPlatnoscMachine';
import { Form1 } from './Form1';
// import { Form2 } from './Form2';

function ZapoNaPlatnosc() {
	// interface Fields {
	// 	kwotaZnP: number
	// 	kwotaMinus: number
	// }
	const [current, send] = useMachine(zapoNaPlatnoscMachine);
	// console.log(current.context.kwotaZnP);
	// const handleOnClickForm1 = () => console.log('handleOnClick');
	const handleOnFinishForm1 = (values: any) => {
		console.log(values);
		console.log(values.kwotaMinus + 12);
		send('DONE_POMNIEJSZONO', { kwotaMinus: values.kwotaMinus, dupa: 3434 });
	}
	return (
		<>
			<table className='containerZnP'>
				<thead>
					<tr>
						<th colSpan={2}>{current.matches('pobieranieWoP') && <Spin tip='Loading...' />}</th>
						<th colSpan={4}>Status: {current.value}</th>
						<th colSpan={4}>kwotaZnP: {current.context.kwotaZnP}</th>
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
							{/* <ProgressBar now={60} /> */}
							<Button type='primary' disabled={!current.matches('przeslanoDaneUtylizacjiWoP')}
								onClick={() => send('AKTUALNY_MONTAZ_FIN')}
							>
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
							<Button type='primary' disabled={!current.matches('idle')} onClick={() => send('POBIERZ_ZWoP')}>
								POBIERZ_ZWoP
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('pobranoDaneWoP')} onClick={() => send('TESTUJ_POKRYCIE100PR')}>
								TESTUJ_POKRYCIE100PR
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('testPokrycia100procent')} onClick={() => send('TAK100PR')}>
								TAK100PR
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('akceptacjaKierDWB')} onClick={() => send('AKCEPT_KIER_DWB')}>
								AKCEPT_KIER_DWB
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('przekazanieZnP2BFK')} onClick={() => send('PRZEKAZ2BFK')}>
								PRZEKAZ2BFK
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('przesylanieDanychUtylizacjiWoP')} onClick={() => send('PRZESLIJ_UTYL_WoP')}>
								PRZESLIJ_UTYL_WoP
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('przeslanoDaneUtylizacjiWoP')} onClick={() => send('TESTUJ_WYK100PR')}>
								TESTUJ_WYK100PR
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('testWyk100procent')} onClick={() => send('TAK_WYK100PR')}>
								TAK_WYK100PR
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('koniec')} onClick={() => send('TAK_WYK100PR')}>
								KONEC
							</Button>
						</td>
					</tr>
					<tr>
						<td>20fr</td>
						<td>21fr</td>
						<td>
							<Button type='primary' disabled={!current.matches('testPokrycia100procent')} onClick={() => send('PONIZEJ100PR')}>
								PONIZEJ 100%
							</Button>
						</td>
						<td>
							<Button type='primary' disabled={!current.matches('pomniejszanieKwotyWoP')} onClick={() => send('DONE_POMNIEJSZONO', { kwotaMinus: 66, dupa: 3435 })}>
								POMNIEJSZONO
							</Button>
						</td>
						<td>24fr</td>
						<td>25fr</td>
						<td>26fr</td>
						<td>
							<Button
								type='primary' disabled={!current.matches('testWyk100procent')}
								onClick={() => send('PONIZEJ_WYK100PR')}>
								PONIZEJ_WYK100PR
							</Button>
						</td>
						<td>28fr</td>
						<td>29fr</td>
					</tr>
					<tr>
						<td className='td_form1' colSpan={3}>
							{current.matches('pomniejszanieKwotyWoP') &&
								<Form1
									kwotaZnP={current.context.kwotaZnP}
									kwotaMinus={current.context.kwotaMinus}
									// handleOnClick={handleOnClickForm1}
									handleOnFinish={handleOnFinishForm1}
								/>
							}
						</td>
						<td colSpan={7}>
							<pre style={{ textAlign: "left" }}>
								{JSON.stringify({ value: current.value, context: current.context }, null, 2)}
							</pre>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default ZapoNaPlatnosc;
