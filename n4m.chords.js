import maxApi from "max-api";
import { Chord, Note } from "tonal";

maxApi.addHandler("chord", (midiRoot, name) => {
	const root = Note.fromMidi(midiRoot);
	const chord = Chord.notes(root, name);
	const midiNotes = chord.map(Note.midi);
	maxApi.outlet(midiNotes);
});
