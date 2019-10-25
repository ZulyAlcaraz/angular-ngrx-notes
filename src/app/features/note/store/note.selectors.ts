import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNote from './note.reducer';

export const getNoteStateState = createFeatureSelector<fromNote.State>('note');
export const getNoteId = createFeatureSelector<string>('noteId');

export const getListSelector = createSelector(
    getNoteStateState,
    fromNote.getList
);

export const getNoteSelector = createSelector(
    getNoteStateState,
    fromNote.getNote
);

