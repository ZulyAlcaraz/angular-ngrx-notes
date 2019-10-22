import { NoteActions, NoteActionTypes } from './note.actions';

export const noteFeatureKey = 'note';

export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface State {
  list: Note[];
}

export const initialState: State = {
  list: []
};

export function reducer(state = initialState, action: NoteActions): State {
  switch (action.type) {
    case NoteActionTypes.LoadNotes:
      return state;

    case NoteActionTypes.AddNote:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    default:
      return state;
  }
}

export const getList = (state: State) => state.list;
