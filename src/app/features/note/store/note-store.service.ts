import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromNotes from '.';
import { AddNote, DeleteNote } from './note.actions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NoteStoreService {
    constructor(private store: Store<fromNotes.State>) {}

    getList(): Observable<fromNotes.Note[]> {
        return this.store.pipe(select(fromNotes.getListSelector));
    }

    addNote(note: fromNotes.Note) {
        this.store.dispatch(new AddNote(note));
    }

    deleteNote(id: string) {
        this.store.dispatch(new DeleteNote(id));
    }
}
