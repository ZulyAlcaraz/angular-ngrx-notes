import { LoadNotes, NoteActionTypes, LoadNotesSuccess } from './note.actions';
import { Note } from './note.reducer';

describe('LoadNotes', () => {
    it('should create an action', () => {
        const action = new LoadNotes();
        expect(action.type).toEqual(NoteActionTypes.LoadNotes);
    });
});

describe('LoadNotesSuccess', () => {
    it('should create an action', () => {
        const payload: Note[] = [
            {
                id: '1',
                title: 'Note #1',
                content: 'This is the 1st note',
                color: '#fff'
            },
            {
                id: '2',
                title: 'Note #2',
                content: 'This is the 2nd note',
                color: '#ccc'
            }
        ];
        const action = new LoadNotesSuccess(payload);

        expect({ ...action }).toEqual({
            type: NoteActionTypes.LoadNotesSuccess,
            payload
        });
    });
});
