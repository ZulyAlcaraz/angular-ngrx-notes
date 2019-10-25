import { createServiceFactory } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { NoteStoreService } from './note-store.service';
import * as fromNote from './note.reducer';

describe('NoteStoreService', () => {
    const initialState = fromNote.initialState;
    const spectator = createServiceFactory<NoteStoreService>({
        service: NoteStoreService,
        providers: [
            provideMockStore({ initialState })
        ]
    });

    it('should be created', () => {
        expect(spectator).toBeTruthy();
    });
});
