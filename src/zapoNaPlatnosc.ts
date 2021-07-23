// As shorthand, in XState, events that only have a type can be represented just by their string type:
// equivalent to { type: 'TIMER' }
// const timerEvent = 'TIMER';

// state transition (shorthand)
// this is equivalent to { target: 'resolved' }
// RESOLVE: 'resolved',
import { createMachine } from 'xstate';

export const zapoNaPlatnoscMachine = createMachine({
	id: 'zapoNaPlatnosc',
	initial: 'idle',
	states: {
		idle: {
			on: {
				POBIERZ_ZWoP: 'pobieranieWoP',
			},
		},
		pobieranieWoP: {
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
			on: { DONE_POMNIEJSZONO: 'akceptacjaKierDWB' },
		},
		akceptacjaKierDWB: {
			on: { AKCEPT_KIER_DWB: 'przekazanieZnP2BFK' },
		},
		przekazanieZnP2BFK: {
			on: { PRZEKAZ2BFK: 'przesylanieDanychUtylizacjiWoP' }, //side action - Aktualizuj montaż finansowy
		},
		przesylanieDanychUtylizacjiWoP: {
			on: { PRZEKAZ2BFK: 'testWykorzystania100procent' },
		},
		testWykorzystania100procent: {
			on: {
				TAK_WYK100PR: 'koniec',
				PONIZEJ_WYK100PR: 'idle',
			},
		},
		koniec: {
			type: 'final',
		},
	},
});
