import { Action } from '@ngrx/store';
import { Note } from './note.reducer';

export enum NoteActionTypes {
    LoadNotes = '[Note] Load Notes',
    AddNote = '[Note] AddNote',
    DeleteNote = '[Note] DeleteNote'
}

export class LoadNotes implements Action {
    readonly type = NoteActionTypes.LoadNotes;
}

export class AddNote implements Action {
    readonly type = NoteActionTypes.AddNote;
    constructor(public payload: Note) {}
}

export class DeleteNote implements Action {
    readonly type = NoteActionTypes.DeleteNote;
    constructor(public id: string) {}
}

export type NoteActions = LoadNotes | AddNote | DeleteNote;
