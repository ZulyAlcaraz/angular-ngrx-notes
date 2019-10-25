import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { switchMap, concatMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { NoteActionTypes, NoteActions, LoadNotesSuccess } from './note.actions';

@Injectable()
export class NoteEffects {
    @Effect()
    loadNotes$ = this.actions$.pipe(
        ofType(NoteActionTypes.LoadNotes),
        concatMap(() => EMPTY)
        // switchMap(() => this.getNotes())
    );

    constructor(private actions$: Actions<NoteActions>) {}

    // getNotes(): Observable<Action> {
    //     return of(new LoadNotesSuccess([
    //         {
    //             id: '1',
    //             title: 'Note 1',
    //             content: 'This is a note',
    //             color: '#ccc'
    //         }
    //     ]));
    // }
}
