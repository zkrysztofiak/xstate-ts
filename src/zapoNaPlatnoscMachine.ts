// As shorthand, in XState, events that only have a type can be represented just by their string type:
// equivalent to { type: 'TIMER' }
// const timerEvent = 'TIMER';

// state transition (shorthand)
// this is equivalent to { target: 'resolved' }
// RESOLVE: 'resolved',

import { createMachine, assign } from 'xstate';
// interface Context {
// 	WoPid: number;
// 	kwotaZnP: number; //podstawa
// 	doplataReklamacja?: number;
// 	potracenia: number;
// 	kwotaNaleznaSaldo?: number; //wyliczona z algorytmu +/-
// 	kwotaDoWyplaty?: number; //wyliczone
// }

// const initialContext: Context = {
const initialContext = {
	WoPid: 2,
	kwotaZnP: 100, //podstawa
	doplataReklamacja: 10,
	potracenia: 20,
	kwotaNaleznaSaldo: 0, //wyliczona z algorytmu +/-
	kwotaDoWyplaty: 0, //wyliczone
	error: undefined,
	fetched: {
		kwotaZnP: 0,
		doplataReklamacja: 0,
		potracenia: 0,
		nalezneSaldo: 0,
		doWyplaty: 0,
	},
};
const fetchWoP = (WoPid: number) => fetch(`http://localhost:4001/WoP/${WoPid}`).then((response) => response.json());
// export const zapoNaPlatnoscMachine = createMachine<Context>(
export const zapoNaPlatnoscMachine = createMachine(
	{
		id: 'zapoNaPlatnosc',
		context: initialContext,
		initial: 'idle',
		states: {
			idle: {
				on: {
					POBIERZ_ZWoP: 'pobieranieWoP',
				},
			},
			pobieranieWoP: {
				// after: {
				// 	500: 'pobranoDaneWoP',
				// },
				// on: {
				// 	OK: 'pobranoDaneWoP',
				// 	ERROR: 'failureWoP',
				// },
				invoke: {
					id: 'getUser',
					src: (context, event) => fetchWoP(context.WoPid),
					onDone: {
						target: 'pobranoDaneWoP',
						actions: 'pobieranieWoPonDone',
					},
					onError: {
						target: 'failureWoP',
						actions: 'pobieranieWoPonError',
						// actions: console.log((context, event: any) => event.data),
					},
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
						// actions: ['decrement', 'decrementAssign'],
						actions: 'przelicz',
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
			// increment: assign({ kwotaZnP: (context) => context.kwotaZnP + 1 }),
			// przelicz: (context, event: any) => console.log('event =', event),
			// decrementAssign: assign({ potracenia: (context, event: any) => event.potracenia }),
			// decrement: assign({ kwotaZnP: (context, event: any) => context.kwotaZnP - event.potracenia }),
			przelicz: assign({ kwotaZnP: (context, event: any) => context.fetched.kwotaZnP - event.potracenia + event.doplataReklamacja }),
			// pobieranieWoPonDone: (context, event) => console.log('event.data =', event.data),
			pobieranieWoPonDone: assign({ fetched: (_, event: any) => event.data }),
			pobieranieWoPonError: assign({ error: (_, event: any) => event.data }),
		},
	}
);
