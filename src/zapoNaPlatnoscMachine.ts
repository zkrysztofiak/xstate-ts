// As shorthand, in XState, events that only have a type can be represented just by their string type:
// equivalent to { type: 'TIMER' }
// const timerEvent = 'TIMER';

// state transition (shorthand)
// this is equivalent to { target: 'resolved' }
// RESOLVE: 'resolved',
import { createMachine, assign } from 'xstate';

export const zapoNaPlatnoscMachine = createMachine(
	{
		id: 'zapoNaPlatnosc',
		context: {
			kwotaZnP: 100,
			kwotaMinus: 13,
		},
		initial: 'idle',
		states: {
			idle: {
				on: {
					POBIERZ_ZWoP: 'pobieranieWoP',
				},
			},
			pobieranieWoP: {
				after: {
					500: 'pobranoDaneWoP',
				},
				on: {
					OK: 'pobranoDaneWoP',
					ERROR: 'failureWoP',
				},
			},
			pobranoDaneWoP: {
				on: { TESTUJ_POKRYCIE100PR: 'testPokrycia100procent' },
			},
			failureWoP: {
				on: { RETRY: 'pobieranieWoP' },
			},
			testPokrycia100procent: {
				on: {
					TAK100PR: 'akceptacjaKierDWB',
					PONIZEJ100PR: 'pomniejszanieKwotyWoP',
				},
			},
			pomniejszanieKwotyWoP: {
				on: {
					DONE_POMNIEJSZONO: {
						target: 'akceptacjaKierDWB',
						actions: 'decrement',
					},
				},
			},
			akceptacjaKierDWB: {
				on: { AKCEPT_KIER_DWB: 'przekazanieZnP2BFK' },
			},
			przekazanieZnP2BFK: {
				on: { PRZEKAZ2BFK: 'przesylanieDanychUtylizacjiWoP' }, //side action - Aktualizuj montaż finansowy
			},
			przesylanieDanychUtylizacjiWoP: {
				on: { PRZESLIJ_UTYL_WoP: 'przeslanoDaneUtylizacjiWoP' },
			},
			przeslanoDaneUtylizacjiWoP: {
				on: {
					AKTUALIZUJ_MONTAZ_FIN: 'aktualizacjaMontazuFin',
					TESTUJ_WYK100PR: 'testWyk100procent',
				},
			},
			aktualizacjaMontazuFin: {
				on: { AKTUALNY_MONTAZ_FIN: 'montazFinAktualny' },
			},
			montazFinAktualny: {},
			testWyk100procent: {
				on: {
					TAK_WYK100PR: 'koniec',
					PONIZEJ_WYK100PR: 'idle',
				},
			},
			koniec: {
				type: 'final',
			},
		},
	},
	{
		actions: {
			// actions: assign({ user: (context, event) => event.data })
			increment: assign({ kwotaZnP: (context) => context.kwotaZnP + 1 }),
			// decrement: (context, event) => console.log('event =', event.kwotaMinus )
			decrement: assign({kwotaMinus: (context, event) => event.kwotaMinus })
			// decrement: assign({ kwotaZnP: (context) => context.kwotaZnP - context.kwotaMinus }),
		},
	}
);
